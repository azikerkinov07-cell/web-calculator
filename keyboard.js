function keyboardEnter() {
    if  (event.key === "Enter") {
        calculate();
    }   
}

document.addEventListener("keydown", keyboardEnter);