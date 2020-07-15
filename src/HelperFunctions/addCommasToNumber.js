function addCommasToNumber(num) {
    //Guard return
    if (num === null) {
        return "";
    }
    if (num <= 999) {
        return num.toString();
    }

    let numOfPushedNums = 0;
    const arr = [];
    const stringedNum = num.toString();

    for (let i = stringedNum.length - 1; i >= 0; i--) {
        arr.unshift(stringedNum[i]);
        numOfPushedNums++;
        if (i !== 0 && numOfPushedNums === 3) {
            arr.unshift(",");
            numOfPushedNums = 0;
        }
    }
    const numWithCommas = arr.join("");
    return numWithCommas;
}

module.exports = addCommasToNumber;
