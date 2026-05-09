//priority: 2

(() => {
const stoneTypes = [
	'asurine',
	'crimsite',
	'ochrum',
	'veridium',
	'limestone',
	'scorchia',
	'scoria',
	'andesite',
	'diorite',
	'granite',
	'calcite',
	'dripstone',
	'deepslate',
	'tuff'
];
	
for(const stoneType of stoneTypes) {
	BlockCutting.types.add(`${stoneType}`);
	
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:cut_${stoneType}`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:polished_cut_${stoneType}`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:cut_${stoneType}_bricks`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:small_${stoneType}_bricks`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:layered_${stoneType}`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:${stoneType}_pillar`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `create:cut_${stoneType}_slab`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `create:polished_cut_${stoneType}_slab`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `create:cut_${stoneType}_brick_slab`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `create:small_${stoneType}_brick_slab`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `create:cut_${stoneType}_stairs`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `create:polished_cut_${stoneType}_stairs`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `create:cut_${stoneType}_brick_stairs`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `create:small_${stoneType}_brick_stairs`]);
	BlockCutting.tags.push([`kubejs:walls/${stoneType}`, `create:cut_${stoneType}_wall`]);
	BlockCutting.tags.push([`kubejs:walls/${stoneType}`, `create:polished_cut_${stoneType}_wall`]);
	BlockCutting.tags.push([`kubejs:walls/${stoneType}`, `create:cut_${stoneType}_brick_wall`]);
	BlockCutting.tags.push([`kubejs:walls/${stoneType}`, `create:small_${stoneType}_brick_wall`]);
}

const createStoneTypes = [
	'asurine',
	'crimsite',
	'ochrum',
	'veridium'
];

for(const stoneType of createStoneTypes) {
	BlockCutting.types.add(`${stoneType}`);
	
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `create:${stoneType}`]);
}
})();