#consultar serviço windows
$serv = Get-Service -Name EFS
    If ($serv.Status -eq "Running"){
        Write-Host "Em execução"
        }
        Write-Host "Parado"