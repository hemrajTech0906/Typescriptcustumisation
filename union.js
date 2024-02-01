var data5 = "hh:mm:ss";
console.log(data5);
function combine(a, b) {
    // return a+b;
    // return String(a) + String(b);
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(4, 5));
console.log(combine("john", "sidhumusewala11111111"));
