// group of constants
//examples-->role---> admin ,user , manager all string
// enum ====>  numaric  and string 
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["user"] = 2] = "user";
    Role[Role["readonlyUser"] = 3] = "readonlyUser";
    Role[Role["readonly"] = 4] = "readonly";
})(Role || (Role = {}));
console.log(Role);
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
console.log("---all-----", direction);
console.log("---single---", direction.left, direction.right, direction);
