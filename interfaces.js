//interface and it can include properties and method declarations
// using a function or an arrow function.
var kv1 = { key: 5, value: "peter" };
console.log(kv1);
function addKeyValue(key, value) {
    console.log("add of key thr " + key + "value of the " + value);
}
var kvp = addKeyValue;
kvp(100, 'Billing');
var myFunction = function (key, value) {
    console.log("add of key" + key + " value of the " + value);
};
myFunction(77, "Maharashtra");
var arr = [1, 2, 3,];
console.log(arr[0], "-----tech-g-----");
var strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr, "string output from");
console.log(strArr["TS"]);
console.log(strArr["JS"]);
for (var ind in strArr) {
    console.log(ind, "-------ttt-----");
}
console.log(strArr["JS"], "-------hh---------");
var dummyobj = {
    name: "something",
    id: 2,
    // email:"hk@example.com"
};
console.log(dummyobj, "----------optional properties-------");
var personObj = { SSN: 110555444, name: 'James Bond' };
personObj.name = 'Steve Smith'; // OK
console.log(personObj, "-------------readonly-----");
//personObj.SSN = '333666888'; 
///Cannot assign to 'SSN' because it is a read-only property.
//-----------------------------rest parameter ------//
function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill", "desaiganj")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello")); // returns "Hello !"
///----------------------------------TypeScript - Function Overloading----//
// define->you have multiple function with same name with differrent parameter and return type
function add(a, b) {
    //function add(a:number, b:number):number{
    //function add(a:string, b:string):string{
    return a + b;
}
//console.log(add("IND","IA"))
//console.log(add(82,75))
console.log(add([2, 1, 4, 5, 8], [7, 8, 9, 10, 11]));
