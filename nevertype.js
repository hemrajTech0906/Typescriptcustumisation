//when will use -->never type of function never return any value only exceptional/error
// function tryReturn(){
//     return true
// }
//  console.log(tryReturn())
//nothing return means void 
// function undefine(){
//     return
// }
// console.log(undefine())
//    function apiError(msg,code):never{
//     throw new Error(message:msg,Unicode:code)
//    }
//    console.log(apiError("server side error",555))
// function throwErrorWithUnicode(message: string, code: string): never {
//     throw new Error(`Custom Error: ${message} (Unicode: ${code})`);
// }
// try {
//     // Example of using the custom error function
//     throwErrorWithUnicode("An error occurred", "555");
// } catch (error) {
//     console.log(error.message);
// }
// console.log(throwErrorWithUnicode("server side error","555"))
//-------------example of nevertype------//
//   function throwError(errorMsg: string): never { 
//       console.log(errorMsg,"-----hk------");
//         throw new Error(errorMsg); 
//      } 
//    console.log(throwError("server side error"))
//------------2 nd example--------------//
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("server side error", 500));
