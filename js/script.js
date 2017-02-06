
do {
var x = prompt("Число", "");
console.log(typeof(x) );
var x = +x;
} while ( (x < 0) != isNaN(x) );
console.log(typeof(x) );
