console.log("hello");


$('.carousel').carousel({
    interval: 2000
}, 2000)

function myFunction() {
    var x = document.getElementById("cp");
    if (x.className === "right") {
        x.className += " responsive";
    } else {
        x.className = "right";
    }
}