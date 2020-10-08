var cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite;
var pepperoni = 0;
var chicken = 0;
var sausage = 0;
var water = 0;
var coke = 0;
var Dcoke = 0;
var sprite = 0;
var login = false;

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
    cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
    document.getElementById("price").innerHTML = "$ " + cost;
}

//pepperoni checkbox
document.getElementById("pepperoniBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("pepperoniBox").checked == false) {
        document.getElementById("PepperoniSlices").style.visibility = "hidden";
        pepperoni = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("pepperoniBox").checked == true) {
        document.getElementById("PepperoniSlices").style.visibility = "visible";
        pepperoni = 0.5;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    
}

//chicken checkbox
document.getElementById("chickenBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("chickenBox").checked == false) {
        document.getElementById("ChickenSlices").style.visibility = "hidden";
        chicken = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("chickenBox").checked == true) {
        document.getElementById("ChickenSlices").style.visibility = "visible";
        chicken = 0.75;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//sausage checkbox
document.getElementById("sausageBox").onclick = function() {
    document.getElementById("cheeseBox").checked = false;

    if (document.getElementById("sausageBox").checked == false) {
        document.getElementById("SausageSlices").style.visibility = "hidden";
        sausage = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }

    if (document.getElementById("sausageBox").checked == true) {
        document.getElementById("SausageSlices").style.visibility = "visible";
        sausage = 0.75;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//price for drinks
document.getElementById("waterBox").onclick = function() {
    if (document.getElementById("waterBox").checked == false) {
        water = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
    if (document.getElementById("waterBox").checked == true) {
        water = 1.5;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}
document.getElementById("cokeBox").onclick = function() {
    if (document.getElementById("cokeBox").checked == false) {
        coke = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
    if (document.getElementById("cokeBox").checked == true) {
        coke = 1.5;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}
document.getElementById("dietCokeBox").onclick = function() {
    if (document.getElementById("dietCokeBox").checked == false) {
        Dcoke = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
    if (document.getElementById("dietCokeBox").checked == true) {
        Dcoke = 1.5;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}
document.getElementById("spriteBox").onclick = function() {
    if (document.getElementById("spriteBox").checked == false) {
        sprite = 0;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite
        document.getElementById("price").innerHTML = "$ " + cost;
    }
    if (document.getElementById("spriteBox").checked == true) {
        sprite = 1.5;
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite;
        document.getElementById("price").innerHTML = "$ " + cost;
    }
}

//functions for showing and hiding the menus
function hideToppingsMenu() {
    document.getElementById("pizza").style.visibility = "hidden";
    document.getElementById("drinks").style.visibility = "visible";
}

function hideDrinksMenu() {
    document.getElementById("drinks").style.visibility = "hidden";
    document.getElementById("pizza").style.visibility = "visible";
}

//function for logging in
function loggedIn() {
    login = true;
    alert("Thank you for joining us here at Pizza Hub!")
}

//function for finishing the order
function order() {
    if (login != true) {
        alert("You must log in before you can complete an order.")
    } else {
        prompt("Do you have any special instructions for the deliverer?")
        cost = 5 + pepperoni + chicken + sausage + water + coke + Dcoke + sprite;
        alert("Your order total comes out to $" + cost + ", And should be ariving at your doorstep in about 15 minutes. Thank you for choosing Pizza Hub")
    }
}