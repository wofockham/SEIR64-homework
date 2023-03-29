const cat = document.getElementById('cat');
let catLeft = 0;
let movingRight = true;

function catWalk() {
  if (movingRight) {
    catLeft += 10;
    cat.style.transform = 'scaleX(1)';
  } else {
    catLeft -= 10;
    cat.style.transform = 'scaleX(-1)';
  }
  
  if (catLeft >= window.innerWidth - cat.width) {
    movingRight = false;
  } else if (catLeft <= 0) {
    movingRight = true;
  }
  
  cat.style.left = catLeft + 'px';
}

setInterval(catWalk, 50);
