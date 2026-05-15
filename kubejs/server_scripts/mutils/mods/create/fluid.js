//priority: 1009

function CreateFluid(id, amount) {
	if(typeof id != 'string') {
		console.error('Invalid id (allowed types: string)');
		return;
	}
	
	if(typeof amount != 'number') {
		console.error('Invalid amount (allowed types: number)');
		return;
	}
	
	this.id = id;
	this.amount = Intger.valueOf(amount);
	
	this.toJson = () => {
		if(id.startsWith('#')) {
			return {
				fluid_tag: id.slice(1),
				type: 'fluid_tag',
				amount: this.amount
			};
		} else {
			return {
				fluid: this.id,
				type: 'fluid_stack',
				amount: this.amount
			};
		}
	};
};

CreateFluid.of = (id, amount) => {
	return new CreateFluid(id, amount != undefined ? amount : 250);
};