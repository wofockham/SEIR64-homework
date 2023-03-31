
// whenever a button is pressed (on.(click)) 
// append the input variable to the page and assign its value to a variable to be stored
// create a deposit button that updates the value to the corresponding box and store the remaining money as a value
// create a withdraw button that updates teh value to the corresponding box and store the remaining money as a value
// ensure user can see the change using event listeners
// create an if statement that will check the stored value and if the argument is larger than the depsit amount ignore the function
// create an if statement that will change the background color to red of the box if the balance is $0 and grey if its not
// if amount is more than whats deposited, take money from the other one unless there's not enought
// create overdraft protection for both ways

$(document).ready(function () {

    changeBal = function(a, b) {
        const amount = Number($(b + '-amount').val());
        const bal = Number($(b + '-balance').text().slice(1));
        const checkings = Number($('#checking-balance').text().slice(1));
        const saving = Number($('#savings-balance').text().slice(1));


        const colorCheck = function () {
            if (bal + (a * amount) > 0) {
            $(b).css('background-color', '#6C9A74');
            } else {
            $(b).css('background-color', 'red');
            }
        }

        const transfer = function (balance) {
            $(b + '-balance').html('$' + 0);
            $(balance + '-balance').html('$' + (Number($(balance + '-balance').text().slice(1)) - (amount - bal)));
            colorCheck();
        }

        if (a < 0 && b === '#checking') {
            if ((bal + saving) < amount)
            return null;
            else if (bal < amount && (bal + saving) >= amount) {
                transfer('#savings')
                return null;
            } 
        } else if (a < 0 && b === '#savings') {
            if ((bal + checkings) < amount)
            return null;
            else if (bal < amount && (bal + checkings) >= amount) {
                transfer('#checking')
                return null;
            } 
        }

        $(b + '-balance').html('$' + (bal + (a * amount))) 
        console.log(amount);

        colorCheck();


        

    };

$('#checking-deposit').on('click', function() {changeBal(1, '#checking')});
$('#checking-withdraw').on('click', function() {changeBal(-1, '#checking')});
$('#savings-deposit').on('click', function() {changeBal(1, '#savings')});
$('#savings-withdraw').on('click', function() {changeBal(-1, '#savings')});

});