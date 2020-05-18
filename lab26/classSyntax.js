class Patient{
	constructor( age, firstName, lastName ){
		this.age = age;
		this.firstName = firstName;
		this.lastName= lastName;
	}

	printAge(){
		console.log( this.firstName + " е на " + this.age + " години.");
	};
}


// създаване и използване на обектите:
var ivan = new Patient( 60, "Иван", "Иванов");
var petyr = new Patient( 74, "Петър", "Петров");

ivan.printAge();
petyr.printAge();