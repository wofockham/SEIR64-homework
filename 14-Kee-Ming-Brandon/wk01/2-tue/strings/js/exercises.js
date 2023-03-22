// DrEvil
const DrEvil = function( amount ) {
    let result = `${ amount } dollars`;
    if (amount === 1000000) {                       // is input amount is 1 million
        return `${ result } (pinky)`;
    } else {
        return result;
    }
}
console.log( "> DrEvil function" );
console.log( DrEvil( 10 ) );
console.log( DrEvil( 1000000 ) );

// MixUp
const mixUp = function ( string1, string2 ) {
    return `${ string2 } ${ string1 }`;             // swap sling order
}
console.log( "> mixUp function" );
console.log( mixUp( 'mix', 'pod' ) );
console.log( mixUp( 'dog', 'dinner' ) );

// FixStart
const  fixStart = function( string ) {
    let result = string[ 0 ];                       // define first character
    for ( let i = 1; i < string.length; i++ ) {     // check through the rest of the character
        if ( string[ i ] == result[ 0 ] ) {         // if character is the same as first character
            result = `${ result }*`;                // add * to the new string
        } else {
            result = result + string[ i ];          // add same character to the new string
        }
    }
    return result;
}
console.log( "> fixStart function" );
console.log( fixStart( 'babble' ) );

// Verbing
const verbing = function( verb ) {
    if ( verb.length < 3 ) {                        // check if length is less than 3
        return verb;
    } else {
        if ( verb.endsWith( "ing" )) {              // check if string end with "ing"
            return `${ verb }ly`;                     // add "ly" to the end
        } else {
            const ingVerb = `${ verb + verb.slice( -1 ) }ing`; // add additional last character and "ing" to the end
            return ingVerb;       
        }
    }
}
console.log( "> verbing function" );
console.log( verbing('swim') );
console.log( verbing('swimming') );
console.log( verbing('go') );

// Not Bad
const notBad = function( sentence ) {
    if ( sentence.includes( "not" ) && sentence.includes( "bad" ) === true ) {          // if both "not" and "bad" exist
        if ( sentence.indexOf( "not" ) < sentence.indexOf( "bad" )) {                   // if the sequence is right
            const notPosition = sentence.indexOf( "not" );                              // look for "not" position
            const badPosition = sentence.indexOf( "bad" );                              // look for "bad" position
            const newSentence = `${ sentence.slice( 0, notPosition) }good${ sentence.slice( badPosition + 3 ) }`;     // replace "not... bad" with good
            return newSentence;
        } else {
            return sentence;
        }
    } else {
        return sentence;
    }
}
console.log( "> notBad function" );
console.log( notBad( 'This dinner is not that bad!' ) );
console.log( notBad( 'This movie is not so bad!' ) );
console.log( notBad( 'This dinner is bad!' ) );

