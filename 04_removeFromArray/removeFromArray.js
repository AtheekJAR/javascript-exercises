const removeFromArray = function (arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        for (let arg of args) {
            if (arr[i] === arg) {
                arr.splice(i, 1);
                removeFromArray(arr, ...args)
            }
        }
    };
    return arr;
}


    // Do not edit below this line
module.exports = removeFromArray;
