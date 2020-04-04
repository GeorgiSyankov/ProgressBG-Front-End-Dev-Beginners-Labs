$(function () {
	//hide all descriptions:
	$('.description').hide();

	$('.item').on('click', '.title', function (e) {
		$(this).css('color','red');
	})

	// show description on title click:
	$('.title').click(function (e) {
		// compare 'e' vs 'e.target'
		// compare 'this' vs '$(this)
		console.dir($(this).children());
		$(this).parent().children('.description').toggle(800);

	})
})