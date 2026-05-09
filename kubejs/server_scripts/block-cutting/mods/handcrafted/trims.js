//priority: 2

(() => {
const materialTypes = [
	'blackstone',
	'calcite',
	'deepslate',
	'dripstone',
	'quartz',
	'stone',
	'andesite',
	'diorite',
	'granite',
	'oak',
	'spruce',
	'birch',
	'jungle',
	'acacia',
	'dark_oak',
	'mangrove',
	'cherry',
	'crimson',
	'warped',
	'bamboo',
	
];
	
for(const materialType of materialTypes) {
	BlockCutting.types.add(`${materialType}`);
	
	BlockCutting.tags.push([`kubejs:blocks/${materialType}`, `handcrafted:${materialType}_corner_trim`]);
	BlockCutting.tags.push([`kubejs:blocks/${materialType}`, `handcrafted:${materialType}_pillar_trim`]);
}


BlockCutting.tags.push(['kubejs:blocks/sand', 'handcrafted:sandstone_corner_trim']);
BlockCutting.tags.push(['kubejs:blocks/sand', 'handcrafted:sandstone_pillar_trim']);

BlockCutting.tags.push(['kubejs:blocks/red_sand', 'handcrafted:red_sandstone_corner_trim']);
BlockCutting.tags.push(['kubejs:blocks/red_sand', 'handcrafted:red_sandstone_pillar_trim']);

BlockCutting.tags.push(['kubejs:blocks/brick', 'handcrafted:bricks_corner_trim']);
BlockCutting.tags.push(['kubejs:blocks/brick', 'handcrafted:bricks_pillar_trim']);
})();