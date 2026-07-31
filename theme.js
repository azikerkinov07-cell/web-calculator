function changeTheme() {
    const body = document.body;
    const h1 = document.querySelector("h1");

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        h1.style.color = "#333333";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        h1.style.color = "white";
    }
}