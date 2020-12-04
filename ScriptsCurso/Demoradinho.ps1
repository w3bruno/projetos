<#	
	.NOTES
	===========================================================================
	 Created with: 	SAPIEN Technologies, Inc., PowerShell Studio 2020 v5.7.182
	 Created on:   	01/12/2020 19:31
	 Created by:   	bruno.goncalves
	 Organization: 	
	 Filename:     	
	===========================================================================
	.DESCRIPTION
		Script demoradinho
#>

WorkFlow Demorado
{
	While ( 1 ) {
		(Get-Date).ToString() + " Script demoradinho"
		Start-Sleep -Seconds 2
		
	}
}

$wfjob = Demorado -AsJob
