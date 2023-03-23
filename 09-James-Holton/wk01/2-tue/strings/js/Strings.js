const DrEvil = function (dollar) {
    if (dollar === 1000000){
        const logged = `${ dollar } dollars (pinky)`;
        return logged;
    }
    else {
        const logged = `${ dollar } dollars`;
        return logged;
    }
};

const mixUp = function (mix, up) {
    // const opposite = up + " " + mix;
    // return opposite;
    const re = /(\w+)\s(\w+)/;
    const str = mix + ' ' + up;
    const newstr = str.replace(re, "$2 $1");
    return newstr;
};

const fixStart = function(str) {
    const firstLetter = str[0];
    const original = str;
    const word = original.replaceAll(str[0], '*');
    const almost = firstLetter + word;
    const fullWord = almost.replace(almost[1], '');
    return fullWord;
};

const verbing = function (verb) {
    if (verb.length < 3) {
        const noIng = verb;
        return noIng;
    }
    else if (verb.includes('ing')) {
        const addLy = verb + 'ly';
        return addLy;
    }
    else {
        const addIng = verb + 'ing';
        return addIng;
    }
};

const notBad = function (arg) {
    if (arg.indexOf('bad') > arg.indexOf('not') && arg.indexOf('not') > 0) {
        const not = arg.indexOf('not');
        const bad = arg.indexOf('bad') + 3;
        const subString = arg.substring(not, bad);
        const argNNotBad = arg.replace(subString, 'good!');
        const good = argNNotBad;
        return good;
    }
    else {
        return arg;
    }
};