# RenataLadies Stable Dev Server
# PowerShell script for reliable development environment

param(
    [switch]$Force = $false,
    [switch]$Clean = $false
)

Write-Host "🚀 RenataLadies Stable Development Server" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan

# Set the working directory
$ProjectPath = "D:\Projects\Renataladies\web"
Set-Location $ProjectPath

# Function to kill processes safely
function Stop-NodeProcesses {
    Write-Host "⏹️  Checking for existing Node processes..." -ForegroundColor Yellow
    
    $nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
    if ($nodeProcesses) {
        Write-Host "🔄 Stopping $($nodeProcesses.Count) Node.js process(es)..." -ForegroundColor Yellow
        $nodeProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
        Write-Host "✅ Node processes stopped" -ForegroundColor Green
    } else {
        Write-Host "✅ No Node processes running" -ForegroundColor Green
    }
}

# Function to clear cache
function Clear-NextCache {
    if ($Clean -or $Force) {
        Write-Host "🧹 Clearing Next.js cache..." -ForegroundColor Yellow
        
        if (Test-Path ".next") {
            Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
            Write-Host "✅ .next cache cleared" -ForegroundColor Green
        }
        
        if (Test-Path "node_modules/.cache") {
            Remove-Item "node_modules/.cache" -Recurse -Force -ErrorAction SilentlyContinue
            Write-Host "✅ Node modules cache cleared" -ForegroundColor Green
        }
    }
}

# Function to check port availability
function Test-Port {
    param([int]$Port = 3000)
    
    try {
        $connection = New-Object System.Net.Sockets.TcpClient
        $connection.Connect("localhost", $Port)
        $connection.Close()
        return $true
    }
    catch {
        return $false
    }
}

# Main execution
try {
    Write-Host ""
    
    # Stop existing processes
    Stop-NodeProcesses
    
    # Clear cache if requested
    Clear-NextCache
    
    # Check if port 3000 is available
    if (Test-Port -Port 3000) {
        Write-Host "⚠️  Port 3000 is still in use. Waiting..." -ForegroundColor Yellow
        Start-Sleep -Seconds 3
        
        if (Test-Port -Port 3000) {
            Write-Host "❌ Port 3000 still occupied. Force stopping..." -ForegroundColor Red
            netstat -ano | findstr :3000 | ForEach-Object {
                $line = $_.Trim() -split '\s+'
                if ($line.Length -ge 5) {
                    $pid = $line[4]
                    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
                }
            }
            Start-Sleep -Seconds 2
        }
    }
    
    Write-Host ""
    Write-Host "▶️  Starting Next.js development server..." -ForegroundColor Green
    Write-Host "🌐 Server will be available at: http://localhost:3000" -ForegroundColor Blue
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host "===========================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Start the server
    & npm run dev
}
catch {
    Write-Host "❌ Error starting server: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}