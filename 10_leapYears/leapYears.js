const leapYears = function(year) {

    let a = year % 4;
    let b = year % 100;
    let c = year % 400;

    if ( a === 0 && b === 0 && c === 0 ){
        console.log(a , b , c)
        return true
    }else if ( a === 0 && b !== 0) {
        console.log(a , b , c)
        return true
    }else if (a === 0 && b === 0 && c !== 0 ){
        console.log(a , b , c)
        return false
    }else {
        console.log(a , b , c)
        return false
    }
}


// Do not edit below this line
module.exports = leapYears;
