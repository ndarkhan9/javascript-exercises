const reverseString = function(string) {
    let spl = string.split("");
    let rev = spl.reverse();
    let jn = rev.join("");
    return jn;
};

// Do not edit below this line
module.exports = reverseString;
