let arr:string[] = ["a", "b", "c", "d"]
console.log(arr)


let ran1:(string | number | boolean)[]=["hk",25,true]
let ran2:[string,number,boolean][]=[["hk",55,true]];  // create 2 dimention array
let ran3:[string,number,boolean]=["hk",55,true];  // create 1 dimention array

let random:any= ["hk", 22,true]
console.log("--------any1 without array inside any --------", random)
let ran4:any[]=["hk",55,true];  // create 1 dimention array type any
console.log("--------any2 with array inside any --------", ran4)


console.log(ran2)
console.log("------hk2-----",ran2[0])
console.log("----hhhhh----",ran2[1])
console.log(ran1)
console.log("------hk1-----",ran2[0])



let arr2:string[] =["java", "ts", "js", ]
//arr2[2]="javascript".
arr2.push("python")
console.log(arr2,"-----ph------------")

  //arr2[1]=25 // it will be thrown error becoz type string and we have to store number
console.log(arr2)