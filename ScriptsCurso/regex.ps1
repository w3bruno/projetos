$email = Read-Host Qual o seu e-mail?
$regex = "^[a-z]+\.[a-z]+@contoso.com$"

if ($email -notmatch $regex){
Write-Host "Você errou $email"
exit
}
Write-Host "Acertou"
