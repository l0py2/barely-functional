//priority: 2

(() => {
BlockCutting.types.add('copper');

BlockCutting.tags.push(['kubejs:blocks/copper', 'create:copper_shingles']);
BlockCutting.tags.push(['kubejs:blocks/copper', 'create:copper_tiles']);
BlockCutting.tags.push(['kubejs:slabs/copper', 'create:copper_shingle_slab']);
BlockCutting.tags.push(['kubejs:slabs/copper', 'create:copper_tile_slab']);
BlockCutting.tags.push(['kubejs:stairs/copper', 'create:copper_shingle_stairs']);
BlockCutting.tags.push(['kubejs:stairs/copper', 'create:copper_tile_stairs']);

BlockCutting.types.add('waxed_copper');

BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'create:waxed_copper_shingles']);
BlockCutting.tags.push(['kubejs:blocks/waxed_copper', 'create:waxed_copper_tiles']);
BlockCutting.tags.push(['kubejs:slabs/waxed_copper', 'create:waxed_copper_shingle_slab']);
BlockCutting.tags.push(['kubejs:slabs/waxed_copper', 'create:waxed_copper_tile_slab']);
BlockCutting.tags.push(['kubejs:stairs/waxed_copper', 'create:waxed_copper_shingle_stairs']);
BlockCutting.tags.push(['kubejs:stairs/waxed_copper', 'create:waxed_copper_tile_stairs']);

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

	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `create:${state}_copper_shingles`]);
	BlockCutting.tags.push([`kubejs:blocks/${state}_copper`, `create:${state}_copper_tiles`]);
	BlockCutting.tags.push([`kubejs:slabs/${state}_copper`, `create:${state}_copper_shingle_slab`]);
	BlockCutting.tags.push([`kubejs:slabs/${state}_copper`, `create:${state}_copper_tile_slab`]);
	BlockCutting.tags.push([`kubejs:stairs/${state}_copper`, `create:${state}_copper_shingle_stairs`]);
	BlockCutting.tags.push([`kubejs:stairs/${state}_copper`, `create:${state}_copper_tile_stairs`]);
}
})();