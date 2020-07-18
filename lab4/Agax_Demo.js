// JSON demo:
// [
// 	{
// 		ral:1,
// 		type: A
// 	},
// 	{
// 		ral:2,
// 		type: B
// 	},
// 	{
// 		ral:3,
// 		type: C
// 	}
// ]
// // JSON
// <row1>
// 	<ral value="1">
// 	<type value="A">
// </row1>
// <row1>
// 	<ral value="2">
// 	<type value="B">
// </row1>
// <row1>
// 	<ral value="3">
// 	<type value="c">
// </row1>

// make AJAX request for id=2

// to:https://jsonplaceholder.typicode.com/todos/1



let responseData = `
[
	{
		"ral":1,
		"type": "A"
	},
	{
		"ral":2,
		"type": "B"
	},
	{
		"ral":3,
		"type": "C"
	}
]
`;

let data = JSON.parse(responseData);
console.dir(data);
