const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2) || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let rangeList = [];
    if (num1 < num2) {
        rangeList.push(num1);
        rangeList.push(num2);
    } else {
        rangeList.push(num2);
        rangeList.push(num1);
    }

    let addList = [];
    for (let i = 1; i <= rangeList[1]; i++) {
        addList.push(i);
    }

    let sum = 0;
    for (let i = 0; i < addList.length; i++) {
        sum += addList[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
