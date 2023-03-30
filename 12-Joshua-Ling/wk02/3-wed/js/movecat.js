const cat = document.querySelector("#cat");
cat.style.left = '0px';
cat.style.top = '0px' ;  
cat.style.scale = '0.1';

let speed = 3;
const scaleInc = 0.002;
const topInc = 0.4;

const catWalk = () => {
    cat.style.transform = 'scaleX(1)';

    let oldLeft = parseInt(cat.style.left);
    let newLeft = oldLeft + speed;
    cat.style.left = newLeft + `px`;

    let oldTop = parseFloat(cat.style.top);
    let newTop = oldTop + topInc;
    cat.style.top = newTop + `px`;
    
    let oldScale = parseFloat(cat.style.scale);
    let newScale = oldScale + scaleInc;
    cat.style.scale = newScale;

    if (oldLeft >= window.innerWidth-220) {
        clearInterval(intervalNum);
        speed += 1;
        intervalNum = setInterval(reverseCatWalk, 50);

    }
} 

const reverseCatWalk = () => {
    cat.style.transform = 'scaleX(-1)';

    let oldLeft = parseInt(cat.style.left);
    let newLeft = oldLeft - speed;
    cat.style.left = newLeft + `px`;
    
    let oldTop = parseFloat(cat.style.top);
    let newTop = oldTop + topInc;
    cat.style.top = newTop + `px`;

    let oldScale = parseFloat(cat.style.scale);
    let newScale = oldScale + scaleInc;
    cat.style.scale = newScale;

    if (oldLeft <= 0) {
        clearInterval(intervalNum);
        speed += 1;
        intervalNum = setInterval(catWalk, 50);

    }
}

let intervalNum = setInterval(catWalk, 50);


