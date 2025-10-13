#!/bin/bash

# Quick restart script for RenataLadies dev server
echo "🔄 Restarting RenataLadies dev server..."

# Kill any existing Node processes
taskkill /f /im node.exe 2>$null

# Wait a bit
Start-Sleep -Seconds 2

# Navigate to web directory and start server
cd "D:\Projects\Renataladies\web"
npm run dev