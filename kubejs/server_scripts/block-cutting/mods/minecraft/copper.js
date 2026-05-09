//priority: 2

(() => {
BlockCutting.types.add('copper');

BlockCutting.tags.push(['kubejs:blocks/copper', 'minecraft:copper_block']);
BlockCutting.tags.push(['kubejs:blocks/copper', 'minecraft:cut_copper']);
BlockCutting.tags.push(['kubejs:blocks/copper', 'minecraft:copper_grate']);
BlockCutting.tags.push(['kubejs:blocks/copper', 'minecraft:chiseled_copper']);
BlockCutting.tags.push(['kubejs:slabs/copper', 'minecraft:cut_copper_slab']);
BlockCutting.tags.push(['kubejs:stairs/copper', 'minecraft:cut_copper_stairs']);
BlockCutting.tags.push(['kubejs:doors/copper', 'minecraft:copper_door']);
BlockCutting.tags.push(['kubejs:trapdoors/copper', 'minecraft:copper_trapdoor']);
BlockCutting.tags.push(['kubejs:bulbs/copper', 'minecraft:copper_bulb']);

BlockCutting.types.add('waxed_copper');

BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'minecraft:waxed_copper_block']);
BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'minecraft:waxed_cut_copper']);
BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'minecraft:waxed_copper_grate']);
BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'minecraft:waxed_chiseled_copper']);
BlockCutting.tags.push(['kubejs:slabs/waxed_copper', 'minecraft:waxed_cut_copper_slab']);
BlockCutting.tags.push(['kubejs:stairs/waxed_copper', 'minecraft:waxed_cut_copper_stairs']);
BlockCutting.tags.push(['kubejs:doors/waxed_copper', 'minecraft:waxed_copper_door']);
BlockCutting.tags.push(['kubejs:trapdoors/waxed_copper', 'minecraft:waxed_copper_trapdoor']);
BlockCutting.tags.push(['kubejs:bulbs/waxed_copper', 'minecraft:waxed_copper_bulb']);

const states = [
	'exposed',
	'weathered',
	'oxidized',
	'waxed_exposed',
	'waxed_weathered',
	'waxed_oxidized'
];
	
for(const state of states) {
	BlockCutting.types.add(`${state}_copper`);
	
	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `minecraft:${state}_copper`]);
	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `minecraft:${state}_cut_copper`]);
	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `minecraft:${state}_copper_grate`]);
	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `minecraft:${state}_chiseled_copper`]);
	BlockCutting.tags.push([`kubejs:slabs/${state}_copper`, `minecraft:${state}_cut_copper_slab`]);
	BlockCutting.tags.push([`kubejs:stairs/${state}_copper`, `minecraft:${state}_cut_copper_stairs`]);
	BlockCutting.tags.push([`kubejs:doors/${state}_copper`, `minecraft:${state}_copper_door`]);
	BlockCutting.tags.push([`kubejs:trapdoors/${state}_copper`, `minecraft:${state}_copper_trapdoor`]);
	BlockCutting.tags.push([`kubejs:bulbs/${state}_copper`, `minecraft:${state}_copper_bulb`]);
}
})();