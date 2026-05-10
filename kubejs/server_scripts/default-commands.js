ServerEvents.loaded(event => {
	event.server.runCommandSilent('gamerule spawnRadius 1');
	
	event.server.runCommandSilent('gamerule doPatrolSpawning false');
	event.server.runCommandSilent('gamerule doInsomnia false');
	
	event.server.runCommandSilent('gamerule keepInventory true');
});