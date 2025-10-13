@echo off
title RenataLadies Dev Server

echo ========================================
echo  RenataLadies Dev Server - Stable Start
echo ========================================
echo.

REM Kill any existing Node processes
echo ⏹️  Stopping existing servers...
taskkill /f /im node.exe >nul 2>&1
echo.

REM Wait for processes to stop
timeout /t 3 /nobreak >nul

REM Navigate to web directory
cd /d "%~dp0web"

REM Clear Next.js cache first
echo 🧹 Clearing cache...
if exist .next (
    rmdir /s /q .next
    echo ✅ Cache cleared
) else (
    echo ✅ No cache to clear
)
echo.

REM Start the development server
echo ▶️  Starting Next.js development server...
echo 🌐 Server will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ----------------------------------------
echo.

npm run dev

echo.
echo ========================================
echo Press any key to close...
pause >nul

REM This will only run if dev server stops/crashes
echo.
echo Dev server has stopped.
pause
