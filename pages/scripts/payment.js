var Data = JSON.parse(localStorage.getItem("data"))

// var div = document.getElementById("adrs");
var p1 = document.getElementById("p1");
p1.innerHTML = Data[0].Name;
var p2 = document.getElementById("p2");
p2.innerHTML = Data[0].Address;
var p3 = document.getElementById("p3");
p3.innerHTML = Data[0].City;
var p4 = document.getElementById("p4");
p4.innerHTML = Data[0].Pin;
var p5 = document.getElementById("p5");
p5.innerHTML = `Mob No. ${Data[0].Mobile}`;




var cartdata = JSON.parse(localStorage.getItem("items"));
var details = document.getElementById("details")
var p1 = document.createElement("p");
p1.innerHTML = cartdata[0].name;
var p2 = document.createElement("h3");
p2.innerHTML = `Rs : ${cartdata[0].price}`;
details.append(p1,p2,)








function debit(){
    var credit = document.getElementById("credit");
    credit.style.border = "none";
    var debit = document.getElementById("debit");
    debit.style.borderLeft = "1px solid red"
    var h = document.getElementById("h");
    h.innerHTML = "Pay using Debit Card";
}
function credit(){
    var credit = document.getElementById("credit");
    credit.style.borderLeft = "1px solid red";
    var debit = document.getElementById("debit");
    debit.style.borderLeft = "none"
    var h = document.getElementById("h");
    h.innerHTML = "Pay using Credit Card";
}

function Done(){
    alert("Your Order has been placed successfully");
    window.location.href = "Home.html";
}