const dodger = document.querySelector("#dodger")

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left < 360){
        dodger.style.left = left+10 +"px";
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = left-10 +"px";
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
})
function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if(bottom < 360){
        dodger.style.bottom = bottom+10 +"px";
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowUp"){
        moveDodgerUp();
    }
})
function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if(bottom > 0){
        dodger.style.bottom = bottom-10 +"px";
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowDown"){
        moveDodgerDown();
    }
})