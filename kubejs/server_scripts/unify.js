LootJS.modifiers(event => {
	if(global.dropReplacements.length == 0 && global.removedItems.length == 0) {
		return;
	}
	
	const lootTables = event.addTableModifier(/.*/);

	for(const [original, replacement] of global.dropReplacements) {
		lootTables.replaceLoot(original, replacement, true);
	}

	for(const item of global.removedItems) {
		lootTables.removeLoot(item);
	}
});

ServerEvents.tags('item', event => {	
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
	}
});

ServerEvents.tags('block', event => {
	for(const item of global.removedItems) {
		if(Item.of(item).getBlock()) {
			event.removeAllTagsFrom(item);
			event.add('kubejs:removed', item);
			event.add('minecraft:mineable/axe', item);
			event.add('minecraft:mineable/pickaxe', item);
		}
	}
});

ServerEvents.recipes(event => {
	mutils.recipes.applyEvent(event);
	
	for(const recipeFilter of global.removedRecipes) {
		event.remove(recipeFilter);
	}
	
	for(const [original, replacement] of global.inputReplacements) {
		event.replaceInput({}, original, replacement);
	}
		
	for(const [original, replacement] of global.outputReplacements) {
		mutils.event.replaceOutput({}, original, replacement);
	}
	
	for(const removedItem of global.removedItems) {
		event.replaceInput({}, removedItem, 'minecraft:barrier');
		mutils.event.replaceOutput({}, removedItem, 'minecraft:air');
	}
});