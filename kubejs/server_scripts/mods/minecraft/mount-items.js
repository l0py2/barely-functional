ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:leather_horse_armor' });
	
	event.shaped(
		'minecraft:leather_horse_armor',
		[
			'  I',
			'III',
			'I I'
		],
		{
			I: '#c:leathers'
		}
	);
	
	event.shaped(
		'minecraft:iron_horse_armor',
		[
			'  I',
			'III',
			'I I'
		],
		{
			I: '#c:plates/iron'
		}
	);
	
	event.shaped(
		'minecraft:golden_horse_armor',
		[
			'  G',
			'GGG',
			'G G'
		],
		{
			G: '#c:plates/gold'
		}
	);
	
	event.shaped(
		'minecraft:diamond_horse_armor',
		[
			'  D',
			'DDD',
			'D D'
		],
		{
			D: '#c:gems/diamond'
		}
	);
	
	event.shaped(
		'minecraft:saddle',
		[
			'LLL',
			' I ',
			'   '
		],
		{
			L: '#c:leathers',
			I: '#c:ingots/iron'
		}
	);
});