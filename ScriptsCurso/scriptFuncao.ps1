<#	
	.NOTES
	===========================================================================
	 Created with: 	SAPIEN Technologies, Inc., PowerShell Studio 2020 v5.7.182
	 Created on:   	01/12/2020 18:17
	 Created by:   	bruno.goncalves
	 Organization: 	
	 Filename:     	
	===========================================================================
	.DESCRIPTION
		Script de criação de função
#>
function somar ($parameter1, $parameter2) {
	$resultado = $parameter1 + $parameter2
	Write-Host "A resposta é $resultado"
}
somar 1 2



