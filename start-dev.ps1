# RenataLadies Dev Server Launcher
# This script starts the Next.js dev server in a new PowerShell window that stays open

$host.UI.RawUI.WindowTitle = "RenataLadies Dev Server"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " RenataLadies Dev Server" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting Next.js development server..." -ForegroundColor Green
Write-Host "Server will be available at: http://localhost:3005" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host "----------------------------------------" -ForegroundColor Cyan
Write-Host ""

# Change to web directory and start dev server
Set-Location -Path "$PSScriptRoot\web"

# Run dev server (will keep running until manually stopped)
npm run dev

# This line will only execute if dev server stops/crashes
Write-Host ""
Write-Host "Dev server has stopped." -ForegroundColor Red
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
