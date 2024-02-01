var arr = ["a", "b", "c", "d"];
console.log(arr);
var ran1 = ["hk", 25, true];
var ran2 = [["hk", 55, true]]; // create 2 dimention array
var ran3 = ["hk", 55, true]; // create 1 dimention array
var random = ["hk", 22, true];
console.log("--------any1 without array inside any --------", random);
var ran4 = ["hk", 55, true]; // create 1 dimention array type any
console.log("--------any2 with array inside any --------", ran4);
console.log(ran2);
console.log("------hk2-----", ran2[0]);
console.log("----hhhhh----", ran2[1]);
console.log(ran1);
console.log("------hk1-----", ran2[0]);
var arr2 = ["java", "ts", "js",];
//arr2[2]="javascript".
arr2.push("python");
console.log(arr2, "-----ph------------");
//arr2[1]=25 // it will be thrown error becoz type string and we have to store number
console.log(arr2);
