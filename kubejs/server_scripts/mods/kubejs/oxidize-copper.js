ServerEvents.recipes(event => {
	function CreateSplashing(input, output) {
		let inputName = input.slice(input.indexOf(':') + 1);
		let outputName = output.slice(output.indexOf(':') + 1);
		
		event.custom({
			type: 'create:splashing',
			ingredients: [
				Ingredient.of(input).toJson()
			],
			results: [
				Item.of(output).toJson()
			]
		}).id(`kubejs:create/splashing/${inputName}_to_${outputName}`);
	}
	
	for(const exposedBlock of Ingredient.of('#kubejs:blocks/exposed_copper').itemIds) {
		let baseBlock = exposedBlock.replace('exposed_', '');
		
		if(baseBlock == 'minecraft:copper') {
			baseBlock = 'minecraft:copper_block';
		}

		let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
		let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
		
		CreateSplashing(baseBlock, exposedBlock);
		CreateSplashing(exposedBlock, wheatheredBlock);
		CreateSplashing(wheatheredBlock, oxidizedBlock);
	}
	
	[
		'slabs',
		'stairs',
		'doors',
		'trapdoors',
		'bulbs'
	].forEach(blockType => {
		for(const exposedBlock of Ingredient.of(`#kubejs:${blockType}/exposed_copper`).itemIds) {
			let baseBlock = exposedBlock.replace('exposed_', '');
			let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
			let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
			
			CreateSplashing(baseBlock, exposedBlock);
			CreateSplashing(exposedBlock, wheatheredBlock);
			CreateSplashing(wheatheredBlock, oxidizedBlock);
		}
	});
});