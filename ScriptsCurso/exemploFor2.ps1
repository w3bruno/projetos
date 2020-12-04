#exemplo do comando for
Clear-Host
for($var=1;$var -le 10;$var++)
{
    Test-Connection 192.168.0.$var
}