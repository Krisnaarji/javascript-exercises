const fibonacci = function(n) {

    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1

    }
    else if (n < 0) {
        return "OOPS"

    }
    else {

        let prev = 0, curr = 1;
        for (let i = 2; i <= n; i++) {
          [prev, curr] = [curr, prev + curr];
      
        }
        return curr;
    }

    

};

// Do not edit below this line
module.exports = fibonacci;
