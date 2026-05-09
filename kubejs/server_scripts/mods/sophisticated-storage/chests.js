ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:chest' });
	
	for(const woodType of global.woodTypes) {
		let chest = `sophisticatedstorage:chest[sophisticatedstorage:wood_type="${woodType}"]`
		
		event.remove({ output: chest });
		
		event.shaped(
			chest,
			[
				'AAA',
				'A A',
				'AAA'
			],
			{
				A: `minecraft:${woodType}_planks`
			}
		);
		
		event.shapeless('minecraft:chest', [chest]);
	}
});