//priority: 1008

mutils.recipes.outputReplacers.push((recipe, original, replacement) => {
	if(recipe.results == undefined) {
		return mutils.recipes.status.UNMODIFIED;
	}
	
	if(!Array.isArray(recipe.results)) {
		return mutils.recipes.status.UNMODIFIED;
	}
	
	const deleteMode = replacement == 'minecraft:air';
	
	if(deleteMode) {
		let originalResultCount = recipe.results.length;
		
		recipe.results = recipe.results.filter(result => {
			return result.id != original;
		});
		
		if(recipe.results.length == 0) {
			return mutils.recipes.status.DELETED;
		} else if(originalResultCount != recipe.results.length) {
			return mutils.recipes.status.MODIFIED;
		} else {
			return mutils.recipes.status.UNMODIFIED;
		}
	} else {
		let modified = false;
		
		recipe.results = recipe.results.map(result => {
			if(result.id == original) {
				modified = true;
				result.id = replacement;
			}
			
			return result;
		});
		
		if(modified) {
			return mutils.recipes.status.MODIFIED;
		} else {
			return mutils.recipes.status.UNMODIFIED;
		}
	}
});

mutils.recipes.outputReplacers.push((recipe, original, replacement) => {
	if(recipe.result == undefined) {
		return mutils.recipes.status.UNMODIFIED;
	}
	
	if(Array.isArray(recipe.result)) {
		return mutils.recipes.status.UNMODIFIED;
	}
	
	const deleteMode = replacement == 'minecraft:air';
	
	if(deleteMode) {
		if(recipe.result.id == original) {
			return mutils.recipes.status.DELETED;
		} else {
			return mutils.recipes.status.UNMODIFIED;
		}
	} else {
		if(recipe.result.id == original) {
			recipe.result.id = replacement;
			return mutils.recipes.status.MODIFIED;
		} else {
			return mutils.recipes.status.UNMODIFIED;
		}
	}
});