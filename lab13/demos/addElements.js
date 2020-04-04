let newTitle = 'Title 4';
let newDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur veritatis fugiat cupiditate quos magni ea laboriosam deleniti voluptatem. Possimus aspernatur, quaerat esse eveniet non quisquam adipisci rerum ducimus quam.`;

let newItem = `<div class="item">
<div class="title">${newTitle}</div>
<div class="description">${newDescription}</div>
<button class="removeBtn">remove</button>`

$(function () {
	$('.addBtn').click(function () {
		$('.items').append(newItem)
	})
	// NB: discuss events on dynamically created events
	$('.items').on('click', '.removeBtn', function () {
		$(this).parent().fadeOut();
	})
})