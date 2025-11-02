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

# Helpers to inspect/stop only the port we care about
function Get-PortProcesses {
    param([int]$Port)

    try {
        Get-NetTCPConnection -LocalPort $Port -ErrorAction Stop | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object {
            Get-Process -Id $_ -ErrorAction SilentlyContinue
        }
    }
    catch {
        @()
    }
}

function Stop-PortProcesses {
    param([int]$Port)

    $processes = Get-PortProcesses -Port $Port

    if (-not $processes) {
        Write-Host "✅ Port $Port is free" -ForegroundColor Green
        return
    }

    Write-Host "⏹️  Port $Port in use by $($processes.Count) process(es). Stopping only those..." -ForegroundColor Yellow
    foreach ($process in $processes) {
        Write-Host "   • Stopping PID $($process.Id) ($($process.ProcessName))" -ForegroundColor DarkYellow
        $process | Stop-Process -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 1
    Write-Host "✅ Port $Port has been cleared" -ForegroundColor Green
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

# Function to check if port is responding
function Test-Port {
    param([int]$Port = 3005)

    try {
        $client = New-Object System.Net.Sockets.TcpClient
        $client.Connect("localhost", $Port)
        $client.Close()
        return $true
    }
    catch {
        return $false
    }
}

# Main execution
try {
    Write-Host ""
    
    # Stop existing processes bound to this project's port
    Stop-PortProcesses -Port 3005
    
    # Clear cache if requested
    Clear-NextCache
    
    # Check if port 3005 is available
    if (Test-Port -Port 3005) {
        Write-Host "⚠️  Port 3005 responded even after cleanup. Waiting a moment and re-checking..." -ForegroundColor Yellow
        Start-Sleep -Seconds 2

        if (Test-Port -Port 3005) {
            Write-Host "❌ Port 3005 is still occupied. This usually means another project uses the same port." -ForegroundColor Red
            Write-Host "   Please stop that server manually or change its port so each project stays isolated." -ForegroundColor DarkRed
            Write-Host "Press any key to exit..."
            $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            return
        }
    }
    
    Write-Host ""
    Write-Host "▶️  Starting RenataLadies Next.js server..." -ForegroundColor Green
    Write-Host "🌐 Server: http://localhost:3005" -ForegroundColor Magenta
    Write-Host "💜 Project: RenataLadies (Empowering Feminine Minimalism)" -ForegroundColor Cyan
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