//priority: 1

ServerEvents.tags('item', event => {
	for(const [tag, item] of BlockCutting.tags) {
		event.add(tag, item);
	}
});

ServerEvents.recipes(event => {
	const alternativeRecipeTypes = [
		'minecraft:smelting',
		'minecraft:blasting',
		'minecraft:crafting_shaped',
		'create:cutting'
	];
	
	for(const blockType of BlockCutting.types) {
		let blockTag = `#kubejs:blocks/${blockType}`;
		let slabTag = `#kubejs:slabs/${blockType}`;
		let stairsTag = `#kubejs:stairs/${blockType}`;
		let wallTag = `#kubejs:walls/${blockType}`;
		let fenceTag = `#kubejs:fences/${blockType}`;
		let fenceGateTag = `#kubejs:fence_gates/${blockType}`;
		let paneTag = `#kubejs:panes/${blockType}`;
		
		for(const block of Ingredient.of(blockTag).itemIds) {
			if(block == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: block
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					input: blockTag,
					output: block
				});
			}
			
			event.stonecutting(block, blockTag);
		}
		
		for(const slab of Ingredient.of(slabTag).itemIds) {
			if(slab == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: slab
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: slab
				});
			}
			
			event.stonecutting(slab, slabTag);
			event.stonecutting(Item.of(slab, 2), blockTag);
		}
		
		for(const stairs of Ingredient.of(stairsTag).itemIds) {
			if(stairs == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: stairs
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: stairs
				});
			}
			
			event.stonecutting(stairs, stairsTag);
			event.stonecutting(stairs, blockTag);
		}
		
		for(const wall of Ingredient.of(wallTag).itemIds) {
			if(wall == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: wall
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: wall
				});
			}
			
			event.stonecutting(wall, wallTag);
			event.stonecutting(wall, blockTag);
		}
		
		for(const fence of Ingredient.of(fenceTag).itemIds) {
			if(fence == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: fence
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: fence
				});
			}
			
			event.stonecutting(fence, fenceTag);
			event.stonecutting(Item.of(fence, 2), blockTag);
		}
		
		for(const fenceGate of Ingredient.of(fenceGateTag).itemIds) {
			if(fenceGate == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: fenceGate
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: fenceGate
				});
			}
			
			event.stonecutting(fenceGate, fenceGateTag);
			event.stonecutting(Item.of(fenceGate, 2), blockTag);
		}
		
		for(const pane of Ingredient.of(paneTag).itemIds) {
			if(pane == 'minecraft:barrier') {
				continue;
			}
			
			event.remove({
				type: 'minecraft:stonecutting',
				output: pane
			});
			
			for(const recipeType of alternativeRecipeTypes) {
				event.remove({
					type: recipeType,
					output: pane
				});
			}
			
			event.stonecutting(pane, paneTag);
			event.stonecutting(Item.of(pane, 2), blockTag);
		}
	}
	
	function getOriginalBlock(block, sufix) {
		const [mod, blockName] = block.split(':');
		const rawBlockName = blockName.replace('_' + sufix, '');
		
		if(Item.exists(rawBlockName + '_planks')) {
			return Item.of(rawBlockName + '_planks').id;
		}
		
		if(Item.exists(rawBlockName + '_block')) {
			return Item.of(rawBlockName + '_block').id;
		}
		
		if(Item.exists(rawBlockName + 's')) {
			return Item.of(rawBlockName + 's').id;
		}
		
		if(Item.exists(`${mod}:${rawBlockName}`)) {
			return Item.of(`${mod}:${rawBlockName}`).id;
		}
		
		if(Item.exists(`${mod}:${rawBlockName}s`)) {
			return Item.of(`${mod}:${rawBlockName}s`).id;
		}
		
		if(Item.exists(rawBlockName)) {
			return Item.of(rawBlockName).id;
		}
		
		return 'minecraft:barrier';
	}
	
	function revertBlockVariant(blocks, value, sufix) {
		for(const block of blocks) {
			if(block == 'minecraft:barrier') {
				continue;
			}
			
			let originalBlock = getOriginalBlock(block, sufix);
			
			if(originalBlock != 'minecraft:barrier') {
				event.remove({
					input: block,
					output: originalBlock
				});
				
				event.shapeless(
					originalBlock,
					[Item.of(block, value)]
				);
			}
		}
	}
	
	for(const blockType of BlockCutting.types) {
		let slabTag = `#kubejs:slabs/${blockType}`;
		revertBlockVariant(Ingredient.of(slabTag).itemIds, 2, 'slab');
		
		let stairsTag = `#kubejs:stairs/${blockType}`;
		revertBlockVariant(Ingredient.of(stairsTag).itemIds, 1, 'stairs');
		
		let wallTag = `#kubejs:walls/${blockType}`;
		revertBlockVariant(Ingredient.of(wallTag).itemIds, 1, 'wall');
		
		let fenceTag = `#kubejs:fences/${blockType}`;
		revertBlockVariant(Ingredient.of(fenceTag).itemIds, 2, 'fence');
		
		let fenceGateTag = `#kubejs:fence_gates/${blockType}`;
		revertBlockVariant(Ingredient.of(fenceGateTag).itemIds, 2, 'fence_gate');
		
		let paneTag = `#kubejs:panes/${blockType}`;
		revertBlockVariant(Ingredient.of(paneTag).itemIds, 2, 'pane');
	}
});