// defination of the tuple we can say 
//it is advance version of array to specified
//(specific and ordering ) the type of the element  
// length ko limit banata tuple
// let role:string[]|number[]= ["admin","manager",25]//syntax error arr should be string or number
// let role1:(string[]|number)=["pk","user",25]
// console.log("----hh----",role1)
// console.log(role)
//--------->example tuple:type<---------
var role = ["ok", "user", 25];
role.push(true); //
console.log("------tuple------", role);
role[2] = 24;
