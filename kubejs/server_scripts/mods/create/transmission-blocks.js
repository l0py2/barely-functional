ServerEvents.recipes(event => {
	event.remove({ output: 'create:encased_chain_drive' });
	
	event.shapeless(
		'create:encased_chain_drive',
		[
			'create:andesite_casing',
			'#c:chains'
		],
	);
});