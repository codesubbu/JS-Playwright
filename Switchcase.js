function checkday(daynumber){
    let day;
    switch (daynumber) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
    
        default:
            console.log("Invalid day");
            break;

         
    }
       return day;
}
console.log(checkday(5));