const dropDown = document.querySelector("#sidebar")

function mouseEnter () {
    if(dropDown.classList.contains('closed')) {
        dropDown.classList.remove('closed')
    }
}

function mouseLeave() {
    if(!dropDown.classList.contains('closed')) {
        dropDown.classList.add('closed')
    }
}   


dropDown.addEventListener("mouseenter", mouseEnter);
dropDown.addEventListener("mouseleave", mouseLeave);