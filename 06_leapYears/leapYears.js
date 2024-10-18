const leapYears = function(year) {
    // Check if year is divisible by 4
    if (year % 4 === 0) {
        // If it is divisible by 100, check if it's also divisible by 400
        if (year % 100 === 0) {
            return year % 400 === 0; // Return true if divisible by 400, otherwise false
        }
        return true; // Return true if divisible by 4 but not by 100
    }
    return false; // Return false if not divisible by 4
};

// Do not edit below this line
module.exports = leapYears;
