const removeFromArray = function(list, ...nums) {
    let filteredList = [];
    // loop thorough nums list
    for (let num of nums) {
        // for each num check wether it is in list
        if (list.includes(num)) {
            // if num is in list remove all ocurrences
            list = list.filter((item) => item!== num);
            filteredList = list;
        } else {
            filteredList = list;
        }
    }

    return filteredList;
};

// Do not edit below this line
module.exports = removeFromArray;
