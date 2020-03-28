let strings = [

]

// let re = /https?:\/\//; // ip
let re = /https?:\/\/[a-z]+\.[a-z]+/i; // NL

// let re = /https?:\/\/W+.W+/; //DD

strings.forEach( (str)=>{
	let match = str.match(re);
	if( match ){
		console.log(`${str} : ${match[0]}`);
	}
} )


