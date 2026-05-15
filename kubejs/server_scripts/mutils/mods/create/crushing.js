//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_crushing',
	(ingredient, results, processingTime) => {
		if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		ingredient = Ingredient.isIngredient(ingredient) ? ingredient.toJson() : Ingredient.of(ingredient).toJson();
		
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
		
		if(processingTime != undefined && typeof processingTime != 'number') {
			console.error('Invalid processing time type (allowed types: number)');
			return null;
		}
		
		return {
			type: 'create:crushing',
			ingredients: [ingredient],
			results: results,
			processing_time: processingTime != undefined ? processingTime : 200
		};
	}
);