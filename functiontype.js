// which type of value should be returned string/number/boolean/array/any/void
function add() {
    return "hello world";
}
console.log(add());
console.log(typeof (add()));
var a = undefined;
function sum() {
    return a;
}
console.log(sum());
