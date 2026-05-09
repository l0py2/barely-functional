ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:barrel' });
	
	for(const woodType of global.woodTypes) {
		let barrel = `sophisticatedstorage:barrel[sophisticatedstorage:wood_type="${woodType}"]`;
		
		event.remove({ output: barrel });
		
		event.shaped(
			barrel,
			[
				'ABA',
				'A A',
				'ABA'
			],
			{
				A: `minecraft:${woodType}_planks`,
				B: `minecraft:${woodType}_slab`
			}
		);
		
		event.shapeless('minecraft:barrel', [barrel]);
	}
	
	for(const woodType of global.woodTypes) {
		let barrel = `sophisticatedstorage:limited_barrel_1[sophisticatedstorage:wood_type="${woodType}"]`;
		
		event.remove({ output: barrel });
		
		event.shaped(
			barrel,
			[
				'ABA',
				'A A',
				'AAA'
			],
			{
				A: `minecraft:${woodType}_planks`,
				B: `minecraft:${woodType}_slab`
			}
		);
	}
	
	for(const woodType of global.woodTypes) {
		let barrel = `sophisticatedstorage:limited_barrel_2[sophisticatedstorage:wood_type="${woodType}"]`;
		
		event.remove({ output: barrel });
		
		event.shaped(
			barrel,
			[
				'AAA',
				'B B',
				'AAA'
			],
			{
				A: `minecraft:${woodType}_planks`,
				B: `minecraft:${woodType}_slab`
			}
		);
	}
	
	for(const woodType of global.woodTypes) {
		let barrel = `sophisticatedstorage:limited_barrel_3[sophisticatedstorage:wood_type="${woodType}"]`;
		
		event.remove({ output: barrel });
		
		event.shaped(
			barrel,
			[
				'ABA',
				'A A',
				'BAB'
			],
			{
				A: `minecraft:${woodType}_planks`,
				B: `minecraft:${woodType}_slab`
			}
		);
	}
	
	for(const woodType of global.woodTypes) {
		let barrel = `sophisticatedstorage:limited_barrel_4[sophisticatedstorage:wood_type="${woodType}"]`;
		
		event.remove({ output: barrel });
		
		event.shaped(
			barrel,
			[
				'BAB',
				'A A',
				'BAB'
			],
			{
				A: `minecraft:${woodType}_planks`,
				B: `minecraft:${woodType}_slab`
			}
		);
	}
});