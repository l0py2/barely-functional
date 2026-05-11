ServerEvents.recipes(event => {	
	event.blasting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1);
	
	event.remove({ output: 'minecraft:chain' });
	
	event.shaped(
		'minecraft:chain',
		[
			' A ',
			' A ',
			' A '
		],
		{
			A: '#c:nuggets/iron'
		}
	);
	
	event.remove({ output: 'minecraft:lodestone' });
	
	event.shaped(
		'minecraft:lodestone',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#minecraft:stone_bricks',
			B: '#c:ingots/iron'
		}
	);
});