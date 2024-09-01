const palindromes = function (input) {
    return  input.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"") === input.split("").reverse().join("").toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
};

// Do not edit below this line
module.exports = palindromes;
