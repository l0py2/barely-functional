//priority: 100

global.removedItems = global.removedItems.concat([
	'create:dough'
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: 'create:smoking/bread' }
]);

global.inputReplacements = global.inputReplacements.concat([
	['create:dough', '#c:foods/dough/wheat']
]);

global.outputReplacements = global.outputReplacements.concat([
	['create:dough', 'farmersdelight:wheat_dough']
]);