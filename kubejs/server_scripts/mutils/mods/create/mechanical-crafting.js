//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_mechanical_crafting',
	(pattern, keys, result) => {
		if(!Array.isArray(pattern)) {
			console.error('Invalid pattern type (allowed types array)');
			return null;
		}
		
		if(typeof keys != 'object' && Array.isArray(keys)) {
			console.error('Invalid keys (allowed types: array)');
			return null;
		}
		
		let invalidKeys = false;
		
		for(const key in keys) {
			if(typeof keys[key] == 'string') {
				keys[key] = Ingredient.of(keys[key]).toJson();
			} else if(Ingredient.isIngredient(keys[key])) {
				keys[key] = keys[key].toJson();
			} else {
				invalidKeys = true;
				keys[key] = null;
			}
		}
		
		if(invalidKeys) {
			console.error('Invalid key (allowed types: string, Ingredient.of)');
			return null;
		}
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		result = Item.isItem(result) ? result.toJson() : Item.of(result).toJson();
		
		return {
			type: 'create:mechanical_crafting',
			category: 'misc',
			accept_mirrored: false,
			pattern: pattern,
			key: keys,
			result: result
		};
	}
);