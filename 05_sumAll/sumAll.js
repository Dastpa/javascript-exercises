const sumAll = function(x, y) {
    
    if ( !(typeof x === "number")
      || !(typeof y === "number")
      || x < 0 || y < 0 ) 
      return("ERROR");

    let total = x;

    if (x < y) {
        while (x !== y) {
            x++;
            total+= x;
        }
    } else if (x > y) {
        while (x !== y) {
            x--;
            total+= x;
        }
    } else {
        total = 0;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
