#exemplo Foreach
Clear-Host
#foreach ($var in 1,2,3,4,5,6,7,8){Write-Host $var}
foreach ($arquivos in Get-ChildItem){
    if($arquivos.IsReadOnly){
        Write-Host $arquivos.FullName}
}
#parar processos máquina
Get-Process notepad | foreach kill