# RenataLadies Dev Server Watchdog
# This script ensures the Next.js dev server is always running

$projectPath = "D:\Projects\Renataladies\web"
$serverPort = 3005
$maxRetries = 3

function Test-ServerRunning {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$serverPort" -Method GET -TimeoutSec 5 -UseBasicParsing
        return $true
    }
    catch {
        return $false
    }
}

function Get-PortPids {
    param([int]$Port)
    try {
        (Get-NetTCPConnection -LocalPort $Port -ErrorAction Stop | Select-Object -ExpandProperty OwningProcess -Unique)
    } catch { @() }
}

function Stop-PortPids {
    param([int]$Port)
    $pids = Get-PortPids -Port $Port
    if (-not $pids) { return }
    foreach ($pid in $pids) {
        try { Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue } catch {}
    }
}

function Start-DevServer {
    Write-Host "Starting Next.js dev server on port $serverPort..." -ForegroundColor Green
    Set-Location $projectPath

    # Stop only processes locking the configured port (don’t kill all node processes)
    Stop-PortPids -Port $serverPort
    Start-Sleep -Seconds 1

    # Start the dev server
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$projectPath'; npm run dev" -WindowStyle Normal
    
    # Wait for server to start
    $attempts = 0
    do {
        Start-Sleep -Seconds 3
        $attempts++
        Write-Host "Checking server status... (attempt $attempts)" -ForegroundColor Yellow
    } while (-not (Test-ServerRunning) -and $attempts -lt 10)
    
    if (Test-ServerRunning) {
        Write-Host "✅ Server is running at http://localhost:$serverPort" -ForegroundColor Green
        return $true
    } else {
        Write-Host "❌ Failed to start server" -ForegroundColor Red
        return $false
    }
}

function Watch-Server {
    $retryCount = 0
    
    while ($retryCount -lt $maxRetries) {
        if (-not (Test-ServerRunning)) {
            Write-Host "❌ Server is not responding. Restarting... (retry $($retryCount + 1)/$maxRetries)" -ForegroundColor Red
            
            if (Start-DevServer) {
                $retryCount = 0  # Reset retry counter on successful start
                Write-Host "✅ Server restarted successfully" -ForegroundColor Green
            } else {
                $retryCount++
                Write-Host "❌ Failed to restart server. Retry $retryCount/$maxRetries" -ForegroundColor Red
                Start-Sleep -Seconds 5
            }
        } else {
            Write-Host "✅ Server is healthy at http://localhost:$serverPort" -ForegroundColor Green
            $retryCount = 0  # Reset retry counter
        }
        
        Start-Sleep -Seconds 10  # Check every 10 seconds
    }
    
    Write-Host "❌ Maximum retries reached. Stopping watchdog." -ForegroundColor Red
}

# Main execution
Write-Host "🚀 RenataLadies Dev Server Watchdog Starting..." -ForegroundColor Cyan
Write-Host "📁 Project path: $projectPath" -ForegroundColor Gray
Write-Host "🌐 Server port: $serverPort" -ForegroundColor Gray

if (-not (Test-ServerRunning)) {
    Write-Host "Server not running. Starting..." -ForegroundColor Yellow
    Start-DevServer | Out-Null
}

Write-Host "👀 Starting server monitoring..." -ForegroundColor Cyan
Watch-Server