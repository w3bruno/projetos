﻿#exemplo do while
Clear-Host


$i=0

while($true)
    {
        $i++
        Write-Host "Vou contar até $i"
        if($i -ge 1000)
        {
            Break
        }
    }