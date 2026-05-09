ItemEvents.modifyTooltips(event => {
	for(const item of global.removedItems) {
		event.add(item, Text.red('Item removed'));
	}

	for(const [original, replacement] of global.inputReplacements) {
		if(!original.startsWith('#')) {
			event.add(original, Text.green(`Input replaced with ${replacement}`));
		}
	}

	for(const [original, replacement] of global.outputReplacements) {
		if(!original.startsWith('#')) {
			event.add(original, Text.green(`Output replaced with ${replacement}`));
		}
	}
	
	for(const [original, replacement] of global.dropReplacements) {
		event.add(original, Text.green(`Drop replaced with ${replacement}`));
	}
});

RecipeViewerEvents.removeEntries('item', event => {
	for(const item of global.removedItems) {
		event.remove(item);
	}
});