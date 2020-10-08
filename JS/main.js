var cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite;
var pepperoni = 0;
var chicken = 0;
var sausage = 0;
var water = 0;
var coke = 0;
var Dcoke = 0;
var sprite = 0;

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
    cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}

//pepperoni checkbox
document.getElementById("pepperoniBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("pepperoniBox").checked == false) {
        document.getElementById("PepperoniSlices").style.visibility = "hidden";
        pepperoni = 0;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("pepperoniBox").checked == true) {
        document.getElementById("PepperoniSlices").style.visibility = "visible";
        pepperoni = 0.5;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    
}

//chicken checkbox
document.getElementById("chickenBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("chickenBox").checked == false) {
        document.getElementById("ChickenSlices").style.visibility = "hidden";
        chicken = 0;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("chickenBox").checked == true) {
        document.getElementById("ChickenSlices").style.visibility = "visible";
        chicken = 0.75;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//sausage checkbox
document.getElementById("sausageBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("sausageBox").checked == false) {
        document.getElementById("SausageSlices").style.visibility = "hidden";
        sausage = 0;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("sausageBox").checked == true) {
        document.getElementById("SausageSlices").style.visibility = "visible";
        sausage = 0.75;
        cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//price for drinks
document.getElementById("waterBox").onclick = function() {
    water = 1.5;
    cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}
document.getElementById("cokeBox").onclick = function() {
    coke = 1.5;
    cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}
document.getElementById("dietCokeBox").onclick = function() {
    Dcoke = 1.5;
    cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}
document.getElementById("spriteBox").onclick = function() {
    sprite = 1.5;
    cost = pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}

document.getElementById("drinksTab").onclick = function() {
    hideToppingsMenu()
}
document.getElementById("toppingsTab").onclick = function() {
    hideDrinksMenu()
    console.log("click")
}

function hideToppingsMenu() {
    document.getElementById("pizza").style.visibility = "hidden";
    document.getElementById("drinks").style.visibility = "visible";
}

function hideDrinksMenu() {
    document.getElementById("drinks").style.visibility = "hidden";
    document.getElementById("pizza").style.visibility = "visible";
}