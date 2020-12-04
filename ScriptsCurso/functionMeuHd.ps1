function meuHD{
cls
$disk = Get-WmiObject Win32_LogicalDisk -Filter "DeviceID='C:'" | Select-Object Name, 
@{n='Capacidade (Gb)' ;e={"{0:n2}" -f ($_.size/1gb)}}, 
@{n='Espaço Livre (Gb)';e={"{0:n2}" -f ($_.freespace/1gb)}},
 @{n='Percentagem Livre';e={"{0:n2}%" -f ($_.freespace/$_.size*100)}}
Write-Output $disk
}
#Write-Output ($disk.Disco ,"{0}GB total" -f [math]::truncate($disk.Size / 1GB), "{0}GB free" -f [math]::truncate($disk.FreeSpace / 1GB)) 

