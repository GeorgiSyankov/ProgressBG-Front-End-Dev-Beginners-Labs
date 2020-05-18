function Patient( age, firstName, lastName ){
    this.age = age;
    this.firstName = firstName;
	this.lastName= lastName;
	this.address = {
		'country':'Bulgaria',
		'zip': {
			'a': 123,
			'b': 456
		}
	}
};

Patient.prototype.printAge = function(){
	console.log( this.firstName + " е на " + this.age + " години.");
};

// създаване и използване на обектите:
var ivan = new Patient( 60, "Иван", "Иванов");
var petyr = new Patient( 74, "Петър", "Петров");

ivan.printAge();
petyr.printAge();
console.log(ivan.address.zip.a);