ServerEvents.recipes(event => {
	event.remove({ id: 'handcrafted:stackable_book' });
	event.shapeless('handcrafted:stackable_book', ['minecraft:book']);
	event.shapeless('minecraft:book', ['handcrafted:stackable_book']);
});