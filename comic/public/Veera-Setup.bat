@echo off
setlocal
title Veera Setup
set "APP=%LOCALAPPDATA%\Veera"
set "ZIP=%TEMP%\veera-src.zip"
set "TMPX=%TEMP%\veera-src"

echo === Veera Desktop Assistant - Setup ===
echo Installing to: %APP%
echo.

where py >nul 2>nul && (set "PY=py -3") || (where python >nul 2>nul && (set "PY=python") || (
  echo Python 3.10+ was not found. Trying to install it with winget...
  winget install -e --id Python.Python.3.12 --accept-package-agreements --accept-source-agreements
  echo.
  echo Python was installed. Please close this window and run Veera-Setup.bat again.
  pause & exit /b 1))

echo Downloading Veera...
powershell -NoProfile -Command "$ProgressPreference='SilentlyContinue'; Invoke-WebRequest 'https://github.com/Shaileshwaranavk/Voice_Assistant/archive/refs/heads/main.zip' -OutFile $env:ZIP" || (echo Download failed. Check your internet connection. & pause & exit /b 1)

echo Unpacking...
if exist "%TMPX%" rmdir /s /q "%TMPX%"
powershell -NoProfile -Command "Expand-Archive -Force $env:ZIP $env:TMPX" || (echo Unpack failed. & pause & exit /b 1)
if not exist "%APP%" mkdir "%APP%"
robocopy "%TMPX%\Voice_Assistant-main" "%APP%" /E /NFL /NDL /NJH /NJS /XF .env >nul
del "%ZIP%" >nul 2>nul
rmdir /s /q "%TMPX%" >nul 2>nul

cd /d "%APP%"
echo Running Veera installer (this can take a few minutes)...
call install.bat

echo Creating desktop shortcut...
powershell -NoProfile -Command "$s=(New-Object -ComObject WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\Veera.lnk'); $s.TargetPath=$env:APP+'\run.bat'; $s.WorkingDirectory=$env:APP; $s.WindowStyle=7; $s.Save()"

echo.
echo Veera is installed. Double-click the "Veera" shortcut on your desktop and say "Hey Veera".
pause
