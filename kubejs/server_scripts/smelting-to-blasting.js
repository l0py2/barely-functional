ServerEvents.recipes(event => {
	event.forEachRecipe({ type: 'minecraft:smelting' }, smeltingRecipe => {
		let smeltingRecipeData = JSON.parse(smeltingRecipe.json);
		
		let food = false;
		let exists = false;
		
		event.forEachRecipe({ type: 'minecraft:smoking' }, smokingRecipe => {
			let smokingRecipeData = JSON.parse(smokingRecipe.json);
			
			if(smeltingRecipeData.result.id == smokingRecipeData.result.id) {
				food = true;
			}
		});
		
		event.forEachRecipe({ type: 'minecraft:blasting' }, blastingRecipe => {
			let blastingRecipeData = JSON.parse(blastingRecipe.json);
			
			if(smeltingRecipeData.result.id == blastingRecipeData.result.id) {
				exists = true;
			}
		});
		
		if(!(food || exists)) {
			let newRecipe = Object.assign(smeltingRecipeData);
			
			newRecipe.type = 'minecraft:blasting';
			newRecipe.cookingtime = 100;
			
			event.custom(newRecipe).id(smeltingRecipe.getId());
		}
	});
	
	event.remove({ type: 'minecraft:smelting' });
});