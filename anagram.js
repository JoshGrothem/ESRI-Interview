/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charS = Array.from(s);
    let charT = Array.from(t);

    charS.sort();
    charT.sort();

    return charS.toString()===charT.toString();
};

console.log(isAnagram("rat", "tar"));