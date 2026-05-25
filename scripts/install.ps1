# MERCANA — toza npm o'rnatish (Windows)
# Cursor / dev server / boshqa terminalni yoping, keyin ishga tushiring.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Loyiha: $root" -ForegroundColor Cyan

# Node jarayonlarini to'xtatish (ixtiyoriy)
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

if (Test-Path "node_modules") {
  Write-Host "node_modules o'chirilmoqda..." -ForegroundColor Yellow
  cmd /c "rmdir /s /q node_modules" 2>$null
  if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
  }
}

Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue

Write-Host "npm install..." -ForegroundColor Cyan
npm install --ignore-scripts

if ($LASTEXITCODE -ne 0) {
  Write-Host "Xato. Loyihani bo'sh joysiz yo'lga ko'chiring (masalan E:\mercana-portfolio)" -ForegroundColor Red
  exit 1
}

Write-Host "Tayyor. Ishga tushirish: npm run dev" -ForegroundColor Green
