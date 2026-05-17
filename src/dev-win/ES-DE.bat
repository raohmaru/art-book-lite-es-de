@echo off

REM Check if program is running
tasklist /fi "ImageName eq RTSS.exe" /fo csv 2>NUL | find /I "RTSS.exe">NUL
REM Program is not running
if not "%ERRORLEVEL%"=="0" (
    start "" "C:\Programs\Tools\Gaming\RivaTuner Statistics Server\RTSS.exe"
    timeout 2
)

start "" ES-DE.exe --resolution 1280 720 --debug
REM start "" ES-DE.exe --resolution 854 480
REM start "" ES-DE.exe --resolution 640 480
timeout 2
call _sendKeys.bat "ES-DE" ""
