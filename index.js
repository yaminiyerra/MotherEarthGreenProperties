var myIndex = 0;
var myIndexs = 0;
carousel();
carousels();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


function myFunction() {
    var x = document.getElementById("cp");
    if (x.className === "right") {
        x.className += " responsive";
    } else {
        x.className = "right";
    }
}
console.log("hgbgh3wfebehwe")