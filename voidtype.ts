//void---> total blank, function not return any value or| somethings it inside console what a logs 


function printData(){
    console.log("hello")
}
    
printData()




function printCurrentDate(): void {
    const currentDate: Date = new Date();
    console.log(currentDate,"general format date")
    console.log(currentDate.toDateString());
}

// Call the function
printCurrentDate();
