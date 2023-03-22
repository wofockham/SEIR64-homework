
//Dr Evil
const drEvil = function (amount) {
    const dollarAmount = amount.toString().concat("", " amount");
    const pinkyAmount = dollarAmount.concat("", "(pinky)")

    if (amount < 1000000) {
        console.log(`${dollarAmount}`)
    } else {
        console.log(`${pinkyAmount}`)
    }
};
drEvil(10);
drEvil(1000000000);

//MixUp
const mixUp = function (string1, string2) {
    const split1 = string1.split("").slice(0, 2).join("");
    const splitEnd1 = string1.split("").slice(2).join("");

    const split2 = string2.split("").slice(0, 2).join("");
    const splitEnd2 = string2.split("").slice(2).join("");

    const split1Result = split2.concat("", splitEnd1)
    const split2Result = split1.concat("", splitEnd2)


    console.log(split1Result, split2Result)
}
mixUp("dog", "dinner");
mixUp("mix", "pod")

//FixStart
const fixStart = function (str) {
    const firstChar = str.toLowerCase().split("").slice(0, 1).join("")
    const remainingChar = str.split("").slice(1).join("")

    const replaceChar = remainingChar.replaceAll(firstChar, "*");
    const result = firstChar.toUpperCase().concat("", replaceChar)

    console.log(result)
}
fixStart("Babble");
fixStart("Googling");
fixStart("Idiotic");

//Verbing
const verbing = function (str) {
    const addIng = str.concat("", "ing");
    const addLy = str.concat("", "ly")
    const checkING = str.includes("ing");

    if (str.length > 3 && checkING === false ) {
        console.log(`${addIng}`);
    } else if (checkING === true) {
        console.log(`${addLy}`);
    } else if (str.length <= 3) {
        console.log(`${str}`)
    }
}

verbing("cat")
verbing("dear")
verbing("dearing")

// Not bad //Not Working!

const notBad = function (str) {
    
    const firstStr = str.search("not") //returns index no.
    const secondStr = str.search("bad") //returns index no.
    const replaceStr = str.substring(firstStr);

    console.log(firstStr, secondStr, replaceStr )

    if (str.indexOf(firstStr) < str.indexOf(secondStr)) {
        const sliceResult = str.slice(replaceStr)
        console.log(result);
    } else {
        console.log(str);
    }

}

notBad("This dinner is not that bad!")



