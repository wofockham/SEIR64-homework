//DrEvil

function drEvil(x){
    if(x===1000000){
        console.log(`1000000 dollars (pinky)`);
    }else {
            console.log(`${x} dollars`);
        }
    }

//MixUp

function mixUp(firstWord,secondWord){
    const afterMixUp = `${secondWord} ${firstWord}`;
    console.log(afterMixUp);
}

//Fixstart



//Verbing
function verbing(aVerb){
    if (aVerb.length < 3){
        console.log(aVerb);
    } else if (aVerb.slice(-3) ==='ing') {
        console.log(`${aVerb}ly`);
    } else {
        console.log(`${aVerb}ing`);
    }
}

//Not Bad
