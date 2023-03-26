// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function ( cart ) {
    const list = Object.values(cartForParty); // turns values into an array
    let cost = 0;
    for ( let i = 0; i < list.length; i++ ) {
        let price = list[i];
        cost = cost + parseFloat(price);
    }
    return cost;
}

// Output
console.log(cashRegister(cartForParty)); // 60.55


// console.log(Object.values(cartForParty));
// console.log(parseFloat("22.36"))