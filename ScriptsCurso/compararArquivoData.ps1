#exemplo foreach
Clear-Host
$data = Get-Date

foreach($x in Get-ChildItem){
    if($x.CreationTime.Date -lt $data){
    $x.FullName
    }
}