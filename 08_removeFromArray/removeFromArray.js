const removeFromArray = function(arr) {

    const arg = [];

    for ( let j = 1; j<arguments.length; j++){
        arg.push(arguments[j])
    }
    for ( let i = 0 ; i < arr.length; i++ ){

        if (arg.indexOf(arr[i]) > -1) {
            arr.splice(i, 1)
            i--
        }

    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
