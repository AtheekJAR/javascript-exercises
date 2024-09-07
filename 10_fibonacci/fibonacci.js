const fibonacci = function(index) {
    if(index < 0) {
        return "OOPS"
    } else if(index <= 1){
        return Number(index)
    }else{
        return Number(fibonacci(index-1) + fibonacci(index - 2));
    }
};

// Do not edit below this line
module.exports = fibonacci;
