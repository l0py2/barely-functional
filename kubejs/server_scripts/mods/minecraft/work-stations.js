ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:stonecutter' });
	
	event.shaped(
		'minecraft:stonecutter',
		[
			' A ',
			'BBB'
		],
		{
			A: '#c:ingots/iron',
			B: '#c:stones'
		}
	);
	
	event.shaped(
		'minecraft:stonecutter',
		[
			' A ',
			'BBB'
		],
		{
			A: '#c:ingots/copper',
			B: '#c:stones'
		}
	);
	
	event.remove({ output: 'minecraft:blast_furnace' });
	
	event.shaped(
		'minecraft:blast_furnace',
		[
			'AAA',
			'A A',
			'AAA'
		],
		{
			'A': '#minecraft:stone_crafting_materials'
		}
	);
	
	event.remove({ output: 'minecraft:smoker' });
	
	event.shaped(
		'minecraft:smoker',
		[
			'ABA',
			'B B',
			'ABA'
		],
		{
			'A': '#minecraft:logs',
			'B': '#minecraft:stone_crafting_materials'
		}
	);
});