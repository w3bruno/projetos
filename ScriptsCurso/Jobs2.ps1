<#	
	.NOTES
	===========================================================================
	 Created with: 	SAPIEN Technologies, Inc., PowerShell Studio 2020 v5.7.182
	 Created on:   	03/12/2020 23:20
	 Created by:   	bruno.goncalves
	 Organization: 	
	 Filename:     	
	===========================================================================
	.DESCRIPTION
		A description of the file.
#>
Clear-Host

Get-Command -Module PSScheduledJob | Sort-Object Noun

$diario = New-JobTrigger -Daily -At 2PM


Register-ScheduledJob -Name 'Backup' -Trigger $diario -RunNow -ScriptBlock {
	Copy-Item -Path 'C:\Users\bruno.goncalves\Documents\ScriptsCurso\*.*' -Destination 'C:\Users\bruno.goncalves\Documents\ScriptsCurso2' -Force -Recurse
}

Get-ScheduledJob Backup | Get-JobTrigger

Get-ScheduledJob Backup | Unregister-ScheduledJob




