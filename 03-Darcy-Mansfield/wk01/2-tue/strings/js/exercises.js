

// DrEvil

const drEvil = function(dollarAmount) {
    if (dollarAmount > 1000000) {
        return `${dollarAmount} dollars (pinky)`
    } else {
        return `${dollarAmount} dollars`
    }
}


// MixUp

const mixUp = function(stringOne, stringTwo) {
    const oneChanged = stringTwo[0] + stringOne.substring(1);
    const twoChanged = stringOne[0] + stringTwo.substring(1);
    return `${oneChanged} ${twoChanged}`;
}


// FixStart

const fixStart = function(fixString) {
    const charReplace = fixString[0];
    const newString = fixString.replaceAll(charReplace, '*'); // replaces all of first letter with *
    const finalString = newString.replace('*', charReplace); // replaces the first instance of * with the previous first letter
    return finalString;
}


// Verbing

const verbing = function(verbString) {
    if (verbString.length <=3) { 
        return verbString;
    } else {
        if (verbString.substring(verbString.length - 3) == 'ing') {
            return verbString + 'ly';
        } else {
            return verbString + 'ing';
        }
    }
}


// notBad

const notBad = function(notBadString) {
    notIndex = notBadString.indexOf("not");
    badIndex = notBadString.indexOf("bad");
    if (notIndex != 0 && badIndex != 0) {
        if (notIndex < badIndex) {
            finalString = notBadString.substring(0, notIndex) + `good` + notBadString.substring(badIndex + 3);
            return finalString;
        } else {
            return notBadString;
        }
    } else {
        return notBadString;
    }
}