//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_sequenced_assembly',
	(ingredient, sequence, loops, results, transitionalItem) => {
		if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
			console.error('Invalid ingredient (allowed types: string or Ingredient.of)');
			return null;
		}
		
		ingredient = Ingredient.isIngredient(ingredient) ? ingredient.toJson() : Ingredient.of(ingredient).toJson();
		
		if(!Array.isArray(sequence)) {
			console.error('Invalid sequence (allowed types: array)');
			return null;
		}
		
		if(typeof loops != 'number') {
			console.error('Invalid loops (allowed types: number)');
			return null;
		}
		
		if(!Array.isArray(results)) {
			console.error('Invalid results (allowed types: array)');
			return null;
		}
		
		let invalidResults = false;
		
		results = results.map(result => {			
			if(typeof result == 'string') {
				result = Item.of(result).toJson();
			} else if(Item.isItem(result)) {
				result = result.toJson();
			} else if(CreateItem.isItem(result)) {
				result = result.toJson();
			} else {
				invalidResults = true;
				result = null;
			}
			
			return result;
		});
		
		if(invalidResults) {
			console.error('Invalid result (allowed types: string, Item.of, CreateItem)');
			return null;
		}
		
		if(typeof transitionalItem != 'string' && !Item.isItem(transitionalItem)) {
			console.error('Invalid transitional item (allowed types string or Item.of)');
			return null;
		}
	
		transitionalItem = Item.isItem(transitionalItem) ? transitionalItem : Item.of(transitionalItem);
		
		return {
			type: 'create:sequenced_assembly',
			ingredient: ingredient,
			sequence: sequence,
			loops: loops,
			results: results,
			transitional_item: {
				id: transitionalItem.getId()
			}
		};
	}
);