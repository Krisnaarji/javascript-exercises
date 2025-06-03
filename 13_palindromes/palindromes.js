const palindromes = function (words) {

    const real = words.toLowerCase().replace(/[^a-z0-9]/g, '')

    let backwards = [];

    for (let j = real.length - 1; j >= 0; j--) {
        backwards.push(real[j]);
    }

    const reversed = backwards.join('');  

    return real === reversed;

};

// Do not edit below this line
module.exports = palindromes;
