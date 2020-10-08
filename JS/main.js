var cost = pepperoni + chicken + sausage;
var pepperoni = 0;
var chicken = 0;
var sausage = 0;

//cheese pizza
document.getElementById("cheeseBox").onclick = function() {
    document.getElementById("pepperoniBox").checked = false;
    document.getElementById("chickenBox").checked = false;
    document.getElementById("sausageBox").checked = false;

    document.getElementById("PepperoniSlices").style.visibility = "hidden";
    document.getElementById("ChickenSlices").style.visibility = "hidden";
    document.getElementById("SausageSlices").style.visibility = "hidden";

    pepperoni = 0;
    chicken = 0;
    sausage = 0;
    cost = pepperoni + chicken + sausage;
    document.getElementById("price").innerHTML = "$ " + cost;
}

//pepperoni checkbox
document.getElementById("pepperoniBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("pepperoniBox").checked == false) {
        document.getElementById("PepperoniSlices").style.visibility = "hidden";
        pepperoni = 0;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("pepperoniBox").checked == true) {
        document.getElementById("PepperoniSlices").style.visibility = "visible";
        pepperoni = 0.5;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    
}

//chicken checkbox
document.getElementById("chickenBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("chickenBox").checked == false) {
        document.getElementById("ChickenSlices").style.visibility = "hidden";
        chicken = 0;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("chickenBox").checked == true) {
        document.getElementById("ChickenSlices").style.visibility = "visible";
        chicken = 0.75;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//sausage checkbox
document.getElementById("sausageBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("sausageBox").checked == false) {
        document.getElementById("SausageSlices").style.visibility = "hidden";
        sausage = 0;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("sausageBox").checked == true) {
        document.getElementById("SausageSlices").style.visibility = "visible";
        sausage = 0.75;
        cost = pepperoni + chicken + sausage;
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

