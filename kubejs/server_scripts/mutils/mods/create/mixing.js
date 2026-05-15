//priority: 1008

mutils.recipes.recipeTypes.set(
	'create_mixing',
	(ingredients, result, heatRequirement) => {
		if(!Array.isArray(ingredients)) {
			console.error('Invalid ingredients type (allowed types: array)');
			return null;
		}
		
		let invalidIngredients = false;
		
		ingredients = ingredients.map(ingredient => {
			if(typeof ingredient == 'string') {
				ingredient = Ingredient.of(ingredient).toJson();
			} else if(ingredient instanceof MinecraftIngredient) {
				ingredient = ingredient.toJson();
			} else if(ingredient instanceof CreateFluid) {
				ingredient = ingredient.toJson();
			} else {
				invalidIngredients = true;
				ingredient = null;
			}

			return ingredient;
		});
		
		if(invalidIngredients) {
			console.error('Invalid ingredient type (allowed types: string, Ingredient.of, CreateFluid.of)');
			return null;
		}
		
		if(typeof result == 'string') {
			result = Item.of(result).toJson();
		} else if(Item.isItem(result)) {
			result = result.toJson();
		} else if(CreateFluid.isFluid(result)) {
			result = {
				id: result.id,
				amount: result.amount
			};
		} else {
			console.error('Invalid result type (allowed types: string, Item.of, CreateFluid.of)');
			return null;
		}
		
		let recipe = {
			type: 'create:mixing',
			ingredients: ingredients,
			results: [result]
		};
		
		if(heatRequirement == undefined) {
			return recipe;
		}
		
		if(typeof heatRequirement != 'string') {
			console.error('Invalid heat requirement type (allowed types: string)');
			return null;
		}
		
		recipe.heat_requirement = heatRequirement;
		
		return recipe;
	}
);