//priority: 1009

function CreateItem(item, chance) {
	if(typeof item != 'string' && !Item.isItem(item)) {
		console.error('Invalid id (allowed types: string, Item.of)');
		return;
	}
	
	this.item = Item.isItem(item) ? item : Item.of(item);
	this.chance = chance;
	
	this.toJson = () => {
		let returnObject = JSON.parse(this.item.toJson());
		returnObject.chance = this.chance;
		
		return returnObject;
	};
}

CreateItem.of = (item, chance) => {
	return new CreateItem(item, chance);
};

CreateItem.isItem = (item) => {
	if(typeof item != 'object') {
		return false;
	}
	
	return item instanceof CreateItem;
};