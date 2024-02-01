//interface and it can include properties and method declarations
// using a function or an arrow function.

// structural subtyping

//------------basics-----------//

interface keyPair{
    key:number ,
    value :string

}
let kv1:keyPair={key:5,value:"peter"}
console.log(kv1)

//-----------------functional type interfaces----------------//


interface KeyValueProcessor{
    (key:number, value:string):void
}

    function addKeyValue(key:number, value:string){
        console.log("add of key thr "+key+  "value of the "+value)
    }

    let kvp: KeyValueProcessor = addKeyValue;
     kvp(100, 'Billing');

    // console.log(kvp,"-----hk---")
   //let out=(resRes(77,"maharastra"))

  //---------------------------best example --------------------//

                interface resRes {
                    (key: number, value: string): void;
                }

                const myFunction: resRes = function (key: number, value: string): void {
                    console.log("add of key" + key + " value of the " + value);
                };

                myFunction(77, "Maharashtra");




//--------------Interface for Array Type------------------------------//
   interface numList{
    [index:number]:number
   }

   let arr:numList=[1,2,3,]
   console.log(arr[0],"-----tech-g-----")



   //-----------------------object------------------//




   interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr ,"string output from");
console.log(strArr["TS"])

console.log(strArr["JS"])

for(let ind in strArr){
    console.log(ind,"-------ttt-----")
   
}
console.log(strArr["JS"],"-------hh---------")


//------------------Optional Property----------------------------//
  // in optional property we need to use the question mark ofter that key

interface employee{
    name:string,
    id:number,
    email?:string,

}

let dummyobj:employee={
    name:"something",
    id:2,
   // email:"hk@example.com"
}
console.log(dummyobj,"----------optional properties-------")



//----------------readonly properties----------------//
    interface Citizen {
    name: string;
    readonly SSN: number;
    }

    let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

    personObj.name = 'Steve Smith'; // OK
    console.log(personObj,"-------------readonly-----")
//personObj.SSN = '333666888'; 
///Cannot assign to 'SSN' because it is a read-only property.

//-----------------------------rest parameter ------//
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill","desaiganj")); // returns "Hello Steve, Bill!"

console.log(Greet("Hello"));// returns "Hello !"



///----------------------------------TypeScript - Function Overloading----//
 // define->you have multiple function with same name with differrent parameter and return type


 function add(a:any, b:any):any{

 //function add(a:number, b:number):number{
 //function add(a:string, b:string):string{
     return a + b;
 }
 //console.log(add("IND","IA"))
 //console.log(add(82,75))

 console.log(add([2,1,4,5,8],[7,8,9,10,11]))
 


 //--------------Assertion in typescript type