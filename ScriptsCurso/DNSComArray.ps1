#Script Array
clear-host
$GoogleDNS = @("8.8.8.8","8.8.4.4")
$totalDNS = $GoogleDNS.Length
Write-Host "Pingando todos os $totalDNS DNS do Google"
Test-Connection $GoogleDNS -count 1
Sleep 5
Write-Host "FIM"
