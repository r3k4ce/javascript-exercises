const repeatString = function(string, num) {
    // Return ERROR if number is negative
    if (num < 0) {
        return "ERROR";
    }

    // Repeat string the specified amount of num
    let finalString = ""
    for (i = 0; i < num; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
