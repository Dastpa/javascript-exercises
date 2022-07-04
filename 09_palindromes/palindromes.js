const palindromes = (string) => {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/\s/g, "")
    string = string.toLowerCase();

    return reverseString(string) === string;
};

const reverseString = (string) => {
    let arr = string.split("");
    let revArr = arr.reverse();
    let revStr = revArr.join("");

    return revStr;
};

// Do not edit below this line
module.exports = palindromes;
