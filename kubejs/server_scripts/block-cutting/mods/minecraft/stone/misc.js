//priority: 2

(() => {
const stoneTypes = [
	'andesite',
	'diorite',
	'granite'
];
	
for(const stoneType of stoneTypes) {
	BlockCutting.types.add(`${stoneType}`);
	
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `minecraft:${stoneType}`]);
	BlockCutting.tags.push([`kubejs:blocks/${stoneType}`, `minecraft:polished_${stoneType}`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `minecraft:${stoneType}_slab`]);
	BlockCutting.tags.push([`kubejs:slabs/${stoneType}`, `minecraft:polished_${stoneType}_slab`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `minecraft:${stoneType}_stairs`]);
	BlockCutting.tags.push([`kubejs:stairs/${stoneType}`, `minecraft:polished_${stoneType}_stairs`]);
	BlockCutting.tags.push([`kubejs:walls/${stoneType}`, `minecraft:${stoneType}_wall`]);
}
})();