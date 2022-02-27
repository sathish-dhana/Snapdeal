var cartdata = JSON.parse(localStorage.getItem("items"));
var cart = document.getElementById("Cart");
var title = document.createElement("p");
title.innerHTML = cartdata[0].name;
var Image = document.createElement("img");
Image.src = cartdata[0].image;
var cost = document.createElement("p");
cost.innerHTML = `Rs : ${cartdata[0].price}`;
cart.append(Image,title,cost);







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







var details = document.getElementById("details")
var p1 = document.createElement("p");
p1.innerHTML = cartdata[0].name;
var p2 = document.createElement("h3");
p2.innerHTML = `Rs : ${cartdata[0].price}`;
details.append(p1,p2,)





function payment(){
    window.location.href = "Payment.html"
}