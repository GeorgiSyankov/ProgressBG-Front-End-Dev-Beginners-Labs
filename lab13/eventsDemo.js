$(function () {
	//hide all descriptions:
	// $('.description').hide();

	$('.item').click(function (e) {
		// console.dir(e);
		// console.dir(this);
		// console.dir($(this));
		$(this).hide();
	})

	let parents = $('.removeBtn').parentsUntil('.items');
	console.dir(parents);

	// show description on title click:
	// $('.title').click(function (e) {
	// 	// compare 'e' vs 'e.target'
	// 	// compare 'this' vs '$(this)
	// 	console.dir($(this).children());
	// 	$(this).parent().children('.description').toggle(800);

	// })
})