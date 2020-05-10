function foo(y) {
	console.log(`y in foo: ${y}`);
}
foo(1);
console.log(`y in foo: ${y}`);


// RAM
// GLOBAL:
// 0x1234: {.<foo>..} <= foo
// 0x3451: undefined  <= res


// FOO scope:
// y = 1





