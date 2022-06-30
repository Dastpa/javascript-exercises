const removeFromArray = function(arr, ...removeNums) {
    return arr.filter( el => !removeNums.includes( el ) );
};

// Do not edit below this line
module.exports = removeFromArray;
