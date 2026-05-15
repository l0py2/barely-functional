//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_pressing',
	(ingredient, result) => {
		if(typeof ingredient == 'string') {
			ingredient = Ingredient.of(ingredient).toJson();
		} else if(Ingredient.isIngredient(ingredient)) {
			ingredient = ingredient.toJson();
		} else {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		if(typeof result == 'string') {
			result = Item.of(result).toJson();
		} else if(Item.isItem(result)) {
			result = result.toJson();
		} else {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		return {
			type: 'create:pressing',
			ingredients: [ingredient],
			results: [result]
		};
	}
);