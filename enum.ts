// group of constants
//examples-->role---> admin ,user , manager all string

// enum ====>  numaric  and string 

enum Role {
    admin,manager,user,readonlyUser,readonly
}
console.log(Role)

enum direction{
    left,right,up,down
}
console.log("---all-----",direction)
console.log("---single---",direction.left,direction.right,direction)