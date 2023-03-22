// DrEvil

const DrEvil = function(amount) {
    if (amount === 1000000) {
        console.log(`${amount} (pinky)`);
    }
    else {
        console.log(`${amount} dollars`);
    }
    return amount;
    }
DrEvil(1000000);

// MixUp

const mixUp = function(string1,string2) {
    string1.slice(0,2);
    string2.slice(0,2);
    string1[0,1] = string2;
    string2[0,1] = string1;
    console.log(string1 + ' ' + string2);
}
mixUp('hello','goodbye');