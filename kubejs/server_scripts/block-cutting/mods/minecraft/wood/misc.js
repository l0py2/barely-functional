//priority: 2

(() => {
const woodTypes = [
	'oak',
	'spruce',
	'birch',
	'jungle',
	'acacia',
	'dark_oak',
	'mangrove',
	'cherry',
	'crimson',
	'warped'
];
	
for(const woodType of woodTypes) {
	BlockCutting.types.add(`${woodType}`);
	
	BlockCutting.tags.push([`kubejs:blocks/${woodType}`, `minecraft:${woodType}_planks`]);
	BlockCutting.tags.push([`kubejs:slabs/${woodType}`, `minecraft:${woodType}_slab`]);
	BlockCutting.tags.push([`kubejs:stairs/${woodType}`, `minecraft:${woodType}_stairs`]);
	BlockCutting.tags.push([`kubejs:fences/${woodType}`, `minecraft:${woodType}_fence`]);
	BlockCutting.tags.push([`kubejs:fence_gates/${woodType}`, `minecraft:${woodType}_fence_gate`]);
}
})();