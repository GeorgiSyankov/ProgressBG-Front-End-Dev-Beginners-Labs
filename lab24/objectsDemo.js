let student1 = {
	'name': 'ivan',
	'address': {
		'country' : 'Bulgaria',
		'zip' : 1504
	},
	'skills': ['HTML', 'CSS','Python'],
	'age': 23
}

// console.log( student1.name );
// console.log( student1.address.zip );
// console.log( student1.skills[1] );


// object_name.property_name
// console.log( student1.prop1 );

// object_name[variable_holding_property_name]
let prop1 = 'age';
console.log( student1[prop1] );
