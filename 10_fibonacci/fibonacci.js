const fibonacci = (num) => {
    num = parseInt(num);
    if (num < 0) return 'OOPS'

    let counter = 1;
    let firstNum = 1;
    let secondNum = 1;
    let temp = 0;

    while (counter !==  num) {
        temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp;
        counter++;
    }

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
