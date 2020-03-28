let str = `asdd
test	test
12131231
not@word
word-is-word word2`;

let words = str.split(/\s/);
words.forEach( w => console.log(w) );
