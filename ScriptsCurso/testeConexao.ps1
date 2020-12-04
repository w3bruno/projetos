#teste de internet
Clear-Host
$conn = (Test-Connection www.google.com.br -Count 1 -Quiet)
if ($conn){ Write-Host "Funcionando" -ForegroundColor Green}else{
Write-Host "Não funcionou"}