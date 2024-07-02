const repeatString = function (str, num) {
    if(num >=0) {
        let result = "";
        for (let i = 1; i <= num; i++) {
            result += str;
        }
        return result;
    } else{
        return "ERROR";
    }
   
};

// Do not edit below this line
module.exports = repeatString;
