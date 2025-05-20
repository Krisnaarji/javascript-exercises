const sumAll = function(a,b) { 

    let result = [];
    let total = 0;

    if (a < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }

    else if (a < b) {

        for(i = a; i <= b;i++){

            result.push(i);
        }

        for( j = 0 ; j < result.length ; j++){
            total += result[j]
        
        }
    }else {

        for(i = a; i >= b;i--){
    
            result.push(i);
        }

        for( j = 0 ; j < result.length ; j++){
            // console.log(result[j])
            total += result[j]
        }
    
    }
return total
    

};

// Do not edit below this line
module.exports = sumAll;
