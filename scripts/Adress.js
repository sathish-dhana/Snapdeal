var arr = [];
// var cartArr = [{
//     Title:"Callmate H37 With USB Bulb 10000 -mAh Li-ion Power Bank Black",
//     Image : "https://n4.sdlcdn.com/imgs/k/b/a/130x152/Callmate-H37-USB-BULB-10000-SDL249514073-1-e65d8.jpg",
//     price : 299,
// }];
// localStorage.setItem("Cart",JSON.stringify(cartArr));
function addressFetch(){
    // localStorage.clear();
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var mobile = document.getElementById("mob").value;
    var state = document.getElementById("state").value;
    var address = document.getElementById("adrs").value;
    var landmark = document.getElementById("landmark").value;
    function construct(name,city,pin,mobile,state,address,landmark){
        this.Name = name,
        this.City = city,
        this.Pin = pin,
        this.Mobile = mobile,
        this.State = state,
        this.Address = address,
        this.Landmark = landmark
    }
    const obj = new construct(name,city,pin,mobile,state,address,landmark);
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));

    window.location.href = "Review.html"
}
var cartdata = JSON.parse(localStorage.getItem("items"));
var details = document.getElementById("details")
var p1 = document.createElement("p");
p1.innerHTML = cartdata[0].name;
var p2 = document.createElement("h3");
p2.innerHTML = `Rs : ${cartdata[0].price}`;
details.append(p1,p2)
