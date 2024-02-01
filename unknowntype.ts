// difference between type both unknown |any 

let data3:unknown;
data3=25
data3="tech-guide"


let item1:string

// still unknown me muze assign krna hai string to i wont to do the 
//check below if condition typeof  {type check krna}

// if(typeof data3==="string"){
//     item1=data3   
// }
item1=data3   // thrown error becoz we have already declare type of day3 is unknown ofter that 
// assign to the type string i.e day3 is unknown


//--->it allow any type becoz it never throws error
let day5:any;
day5=25
day5="tech-guide"


let item5:string
item5=day5 