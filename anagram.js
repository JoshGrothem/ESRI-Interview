/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let charS = Array.from(s);
    let charT = Array.from(t);

    if (charS.length != charT.length) {
        return false;
    }

    for (let i = 0; i < charS.length; i++) {
        for (let j = 0; j < charS.length - i - 1; j++) {
            if (charS[j + 1] < charS[j]) {
                [charS[j + 1], charS[j]] = [charS[j], charS[j + 1]];
            }
            if (charT[j + 1] < charT[j]) {
                [charT[j + 1], charT[j]] = [charT[j], charT[j + 1]];
            }
        }
    }

    return charS.toString() === charT.toString();
};

console.log(isAnagram("rat", "tar"));