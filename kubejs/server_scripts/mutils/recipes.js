//priority: 1009

mutils.recipes = {
	recipeTypes: new Map(),
	status: {
		UNMODIFIED: 1,
		MODFIED: 2,
		DELETED: 3
	},
	outputReplacers: [],
	applyEvent: (event) => {
		mutils.event = {};
		
		function addCustomRecipe(recipeType, recipeGenerator) {
			mutils.event[recipeType] = function () {
				const args = [];
				Array.prototype.forEach.call(arguments, (argument, index) => {
					args.push(argument);
				});
				
				const recipe = recipeGenerator.apply(null, args);
				
				if(recipe == null) {
					console.error('Invalid recipe');
					return;
				}
				
				event.custom(recipe);
			};
		}
			
		function addRawCustomRecipe(recipeType, recipeGenerator) {
			mutils.event[`raw_${recipeType}`] = function () {
				const args = [];
				Array.prototype.forEach.call(arguments, (argument, index) => {
					args.push(argument);
				});
				
				return recipeGenerator.apply(null, args);
			};
		}
		
		for(const [recipeType, recipeGenerator] of mutils.recipes.recipeTypes) {
			console.log(`Adding ${recipeType} recipe type`);
			
			addCustomRecipe(recipeType, recipeGenerator);
			addRawCustomRecipe(recipeType, recipeGenerator);
		}
		
		mutils.event.replaceOutput = (filter, original, replacement) => {
			event.forEachRecipe(filter, recipe => {
				let id = recipe.getId();
				let data = JSON.parse(recipe.json);
				
				for(const outputReplacer of mutils.recipes.outputReplacers) {
					let recipeStatus = outputReplacer(data, original, replacement);
					
					if(recipeStatus == mutils.recipes.status.MODIFIED) {
						event.custom(data).id(id);
						break;
					} else if(recipeStatus == mutils.recipes.status.DELETED) {
						event.remove({ id: id });
						break;
					}
				}
			});
		};
	}
};