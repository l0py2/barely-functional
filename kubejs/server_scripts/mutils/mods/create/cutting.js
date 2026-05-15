//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_cutting',
	(ingredient, result, processingTime) => {
		if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		ingredient = Ingredient.isIngredient(ingredient) ? ingredient.toJson() : Ingredient.of(ingredient).toJson();
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		result = Item.isItem(result) ? result.toJson() : Item.of(result).toJson();
		
		if(processingTime != undefined && typeof processingTime != 'number') {
			console.error('Invalid processing time type (allowed types: number)');
			return null;
		}
		
		return {
			type: 'create:cutting',
			ingredients: [ingredient],
			results: [result],
			processing_time: processingTime != undefined ? processingTime : 200
		};
	}
);