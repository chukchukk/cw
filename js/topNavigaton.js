function myFunction() {
    var x = document.getElementById("headerAction");
    if (x.className === "header") {
        x.className += " response";
    } else {
        x.className = "header";
    }
}