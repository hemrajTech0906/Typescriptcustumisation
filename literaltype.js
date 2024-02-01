//where do u used approximately just like Union but slite difference
var Data = "string"; // this is statement is 
//----------literals-----//
var Data1 = "abc"; // we have to take fix take two of one value should be asssigned
//definition---->variable ko type assign krne ki jgh value assign kr dena is know as literal type
function add(a, b, type) {
    if (type === "as.number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(add(7, 8, "as.number"));
console.log(add("hk", "mandela", "as.string"));
