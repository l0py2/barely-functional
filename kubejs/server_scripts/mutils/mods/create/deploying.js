//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_deploying',
	(ingredients, result, keepHeldItem) => {
		if(!Array.isArray(ingredients)) {
			console.error('Invalid ingredients type (allowed types: array)');
			return null;
		}
		
		if(ingredients.length != 2) {
			console.error('Invalid ingredients (array length: 2)');
			return null;
		}
		
		let invalidIngredients = false;
		
		ingredients = ingredients.map(ingredient => {
			if(typeof ingredient == 'string') {
				ingredient = Ingredient.of(ingredient).toJson();
			} else if(Ingredient.isIngredient(ingredient)) {
				ingredient = ingredient.toJson();
			} else {
				invalidIngredients = true;
				ingredient = null;
			}

			return ingredient;
		});
		
		if(invalidIngredients) {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		result = Item.isItem(result) ? result.toJson() : Item.of(result).toJson();
		
		if(keepHeldItem != undefined && typeof keepHeldItem != 'boolean') {
			console.error('Invalid keep held item type (allowed types: boolean)');
			return null;
		}
		
		return {
			type: 'create:deploying',
			ingredients: ingredients,
			results: [result],
			keep_held_item: keepHeldItem != undefined ? keepHeldItem : false
		};
	}
);