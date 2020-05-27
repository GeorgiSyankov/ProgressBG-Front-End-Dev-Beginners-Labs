// function greet(){
// 	console.log(`Hello`);
// }
// setInterval(greet, 2000);


let colors = [
    "#FF0000",
    "#4B0082",
    "#0000FF"
];

let imageUrls = [
	'http://imageshack.com/a/img922/3858/5Pd5dc.jpg',
	'http://imageshack.com/a/img923/3776/lKVbAp.jpg',
	'http://imageshack.com/a/img923/6770/WXkPF9.jpg',
	'http://imageshack.com/a/img923/2200/SzDjvi.jpg',
	'http://imageshack.com/a/img924/8715/tz0p3T.jpg'
]


let i = j = 0;
let divNode = document.querySelector(".box");
let img = document.querySelector(".img");
let btnStop = document.querySelector(".btnStop");

function changeBGColor() {
	divNode.style.backgroundColor = colors[ i++ % colors.length ];

	// i = i++ % colors.length;

	// i++;
	// if(i === colors.length){
	// 	i = 0;
	// }
	console.log(`i=${i}`); // 0, 1, 2, 0, 1, 2...
}

function changeImage() {
	j = i++ % imageUrls.length;

	img.src = imageUrls[j]

	console.log(`i=${i}`); // 0, 1, 2, 0, 1, 2...
}

let intervalID = setInterval(changeImage, 1000);


btnStop.addEventListener('click',  function () {
	clearInterval(intervalID)
});
