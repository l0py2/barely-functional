//priority: 2

(() => {
const windowTypes = [
	'oak',
	'spruce',
	'birch',
	'jungle',
	'acacia',
	'dark_oak',
	'mangrove',
	'crimson',
	'warped',
	'cherry',
	'bamboo',
	'ornate_iron',
	'industrial_iron',
	'weathered_iron'
];

for(const windowType of windowTypes) {
	BlockCutting.types.add(`${windowType}_window`);
	
	BlockCutting.tags.push([`kubejs:blocks/${windowType}_window`, `create:${windowType}_window`]);
	BlockCutting.tags.push([`kubejs:panes/${windowType}_window`, `create:${windowType}_window_pane`]);
}
})();