var side = document.getElementById("side_bar_foot");

//var symbol = document.createElement("p");
//symbol.textContent = "+";
//symbol.style.marginLeft="8%";
//symbol.style.marginTop = "-20%";


var footware = document.createElement("h3");
footware.textContent = "Footware";
footware.style.fontSize="14px";
footware.style.color="#ff0066";
footware.style.marginLeft="2%";
footware.style.marginTop = "-38%";

side.append(footware);


/* +++++++++++ +++++++++++ ++++++++++ ++++++++++ ++++++++++++ +++++++++++ ++++++++++++ ++++++++++ +++++++++ ++++++++ */


var sub = document.getElementById("side_bar_foot_sub");
var men_data = document.getElementById("mens");
var women_data = document.getElementById("womens");
var kid_data = document.getElementById("kids");




document.getElementById("side_bar_foot_sub").innerHTML = "";

var main_div_1 = document.createElement("div");
main_div_1.style.marginTop = "-8%"
    main_div_1.style.marginLeft = "5%"
var main_div_2 = document.createElement("div");
main_div_2.style.marginTop = "5%"
    main_div_2.style.marginLeft = "5%"
var main_div_3 = document.createElement("div");
main_div_3.style.marginTop = "5%"
    main_div_3.style.marginLeft = "5%"
var point_1 = document.createElement("a");
point_1.style.color = "black";
point_1.style.fontSize = "16px";
point_1.style.textDecoration="none";

var pro_1 = document.createElement("p");
pro_1.textContent = "13822";
pro_1.style.color = "grey";
pro_1.style.marginTop = "-7%"
pro_1.style.marginLeft = "70%"
pro_1.style.fontSize = "14px";

var point_2 = document.createElement("a");
point_2.style.color = "black";
point_2.style.fontSize = "16px";
point_2.style.textDecoration="none";

var pro_2 = document.createElement("p");
pro_2.textContent = "11987";
pro_2.style.color = "grey";
pro_2.style.color = "grey";
pro_2.style.marginTop = "-7%"
pro_2.style.marginLeft = "70%"
pro_2.style.fontSize = "14px";

var point_3 = document.createElement("a");
point_3.style.color = "black";
point_3.style.fontSize = "16px";
point_3.style.textDecoration="none";

var pro_3 = document.createElement("p");
pro_3.textContent = "3541";
pro_3.style.color = "grey";
pro_3.style.fontSize = "14px";
pro_3.style.color = "grey";
pro_3.style.marginTop = "-7%"
pro_3.style.marginLeft = "70%"

var content_1 = document.createTextNode("Men's Footware");
//content_1.style.color = "black"
var content_2 = document.createTextNode("Women's Footware");
var content_3 = document.createTextNode("Kid's Footware");
point_1.setAttribute("href","Men's Footware.html");
point_1.append(content_1);

point_2.setAttribute("href","footware.html");
point_2.appendChild(content_2);


point_3.setAttribute("href","Kid's Footware.html");
point_3.appendChild(content_3);


main_div_1.append(point_1,pro_1);
men_data.append(main_div_1);
main_div_2.append(point_2,pro_2);
women_data.append(main_div_2);
main_div_3.append(point_3,pro_3);
kid_data.append(main_div_3);
sub.append(main_div_1,main_div_2,main_div_3);
    




/* +++++++++++ +++++++ +++++++ ++++++ +++++ +++++ ++++ ++++ + ++ ++ */



var rating_top =  document.getElementById("rating_bar_foot");



var rating = document.createElement("h3");
rating.textContent = "Customer Rating";
rating.style.fontSize = "14px";
rating.style.color="#ff0066";
rating.style.marginLeft="2%";
rating.style.marginTop = "-47%";

rating_top.append(rating);






var customer = document.getElementById("rating_bar_foot_sub");
let four_  = document.getElementById("four");
let three_ = document.getElementById("three");
let two_ = document.getElementById("two");
let one_ = document.getElementById("one");



    document.getElementById("rating_bar_foot_sub").innerHTML = "";
    var main_div_x_1 = document.createElement("div");
    main_div_x_1.style.marginTop = "-7%";

    var x_4 = document.createElement("input");
    x_4.setAttribute("type" , "checkbox");

    var star_4 = document.createElement("h4");
    star_4.textContent = "★★★★ & Up";
    star_4.style.font= "14px";
    star_4.style.marginTop = "-8%";
    star_4.style.marginLeft = "8%"

    var prod_1 = document.createElement("p");
    prod_1.textContent = "7378";
    prod_1.style.marginTop = "-12%";
    prod_1.style.marginLeft = "70%"
    prod_1.style.fontSize = "14px";
    prod_1.style.color = "grey";


    main_div_x_1.append(x_4,star_4,prod_1);
//
    var main_div_x_2 = document.createElement("div");
    main_div_x_2.style.marginTop = "-4%";

    var x_3 = document.createElement("input");
    x_3.setAttribute("type" , "checkbox");

    var star_3 = document.createElement("h4");
    star_3.textContent = "★★★ & Up";
    star_3.style.font= "14px";
    star_3.style.marginTop = "-8%";
    star_3.style.marginLeft = "8%"

    var prod_2 = document.createElement("p");
    prod_2.textContent = "11337";
    prod_2.style.marginTop = "-12%";
    prod_2.style.marginLeft = "70%"
    prod_2.style.fontSize = "14px";
    prod_2.style.color = "grey";

    main_div_x_2.append(x_3,star_3,prod_2);


    var main_div_x_3 = document.createElement("div");
    main_div_x_3.style.marginTop = "-4%";

    var x_2 = document.createElement("input");
    x_2.setAttribute("type" , "checkbox");

    var star_2 = document.createElement("h4");
    star_2.textContent = "★★ & Up";
    star_2.style.font= "14px";
    star_2.style.marginTop = "-8%";
    star_2.style.marginLeft = "8%"

    var prod_3 = document.createElement("p");
    prod_3.textContent = "12165";
    prod_3.style.marginTop = "-12%";
    prod_3.style.marginLeft = "70%"
    prod_3.style.fontSize = "14px";
    prod_3.style.color = "grey";

    main_div_x_3.append(x_2,star_2,prod_3);
//
    var main_div_x_4 = document.createElement("div");
    main_div_x_4.style.marginTop = "-4%";

    var x_1 = document.createElement("input");
    x_1.setAttribute("type" , "checkbox");

    var star_1 = document.createElement("h4");
    star_1.textContent = "★ & Up";
    star_1.style.font= "14px";
    star_1.style.marginTop = "-8%";
    star_1.style.marginLeft = "8%"

    var prod_4 = document.createElement("p");
    prod_4.textContent = "12860";
    prod_4.style.marginTop = "-12%";
    prod_4.style.marginLeft = "70%"
    prod_4.style.fontSize = "14px";
    prod_4.style.color = "grey";

    main_div_x_4.append(x_1,star_1,prod_4);

    var btn = document.createElement("button");
    btn.textContent = "View More";

    customer.append(main_div_x_1,main_div_x_2,main_div_x_3,main_div_x_4,btn);



var brand_top =  document.getElementById("brand_bar_foot");



var branding = document.createElement("h3");
branding.textContent = "Brand";
branding.style.fontSize = "14px";
branding.style.color="#ff0066";
branding.style.marginLeft="2%";
branding.style.marginTop = "-35%";

brand_top.append(branding);


var brand = document.getElementById("brand_bar_foot_sub");


    document.getElementById("brand_bar_foot_sub").innerHTML="";
    var main_div_x_1 = document.createElement("div");
    main_div_x_1.style.marginTop = "6%";

    var x_4 = document.createElement("input");
    x_4.setAttribute("type" , "checkbox");


    var star_4 = document.createElement("h4");
    star_4.textContent = "ARROW";
    star_4.style.fontSize = "14px";
    star_4.style.marginTop = "-6%";
    star_4.style.marginLeft = "8%"

    var prod_1 = document.createElement("p");
    prod_1.textContent = "1";
    prod_1.style.marginTop = "-12%";
    prod_1.style.marginLeft = "70%"
    prod_1.style.fontSize = "14px";
    prod_1.style.color = "grey";


    main_div_x_1.append(x_4,star_4,prod_1);
//
    var main_div_x_2 = document.createElement("div");
    main_div_x_2.style.marginTop = "0%";

    var x_3 = document.createElement("input");
    x_3.setAttribute("type" , "checkbox");

    var star_3 = document.createElement("h4");
    star_3.textContent = "A-HA Liberty";
    star_3.style.marginTop = "-6%";
    star_3.style.fontSize = "14px";
    star_3.style.marginLeft = "8%"

    var prod_2 = document.createElement("p");
    prod_2.textContent = "7";
    prod_2.style.marginTop = "-12%";
    prod_2.style.marginLeft = "70%"
    prod_2.style.fontSize = "14px";
    prod_2.style.color = "grey";

    main_div_x_2.append(x_3,star_3,prod_2);


    var main_div_x_3 = document.createElement("div");
    main_div_x_3.style.marginTop = "0%";

    var x_2 = document.createElement("input");
    x_2.setAttribute("type" , "checkbox");

    var star_2 = document.createElement("h4");
    star_2.textContent = "Aadi";
    star_2.style.marginTop = "-6%";
    star_2.style.fontSize = "14px";
    star_2.style.marginLeft = "8%"

    var prod_3 = document.createElement("p");
    prod_3.textContent = "6";
    prod_3.style.marginTop = "-12%";
    prod_3.style.marginLeft = "70%"
    prod_3.style.fontSize = "14px";
    prod_3.style.color = "grey";

    main_div_x_3.append(x_2,star_2,prod_3);
//
    var main_div_x_4 = document.createElement("div");
    main_div_x_4.style.marginTop = "0%";

    var x_1 = document.createElement("input");
    x_1.setAttribute("type" , "checkbox");

    var star_1 = document.createElement("h4");
    star_1.textContent = "AAVEAA";
    star_1.style.fontSize = "14px";
    star_1.style.marginTop = "-6%";
    star_1.style.marginLeft = "8%"

    var prod_4 = document.createElement("p");
    prod_4.textContent = "128";
    prod_4.style.marginTop = "-12%";
    prod_4.style.marginLeft = "70%"
    prod_4.style.fontSize = "14px";
    prod_4.style.color = "grey";

    main_div_x_4.append(x_1,star_1,prod_4);

    var btn = document.createElement("button");
    btn.textContent = "View More";


    brand.append(main_div_x_1,main_div_x_2,main_div_x_3,main_div_x_4,btn);





var age_top =  document.getElementById("age_bar_foot");



var age = document.createElement("h3");
age.textContent = "Age";
age.style.fontSize = "14px";
age.style.color="#ff0066";
age.style.marginLeft="2%";
age.style.marginTop = "-145%";

age_top.append(age);




var aged = document.getElementById("age_bar_foot_sub");


    document.getElementById("age_bar_foot_sub").innerHTML="";
    var main_div_x_1 = document.createElement("div");
    main_div_x_1.style.marginTop = "-110%";

    var x_4 = document.createElement("input");
    x_4.setAttribute("type" , "checkbox");


    var star_4 = document.createElement("h4");
    star_4.textContent = "0-6 Months";
    star_4.style.fontSize = "14px";
    star_4.style.marginTop = "-6%";
    star_4.style.marginLeft = "8%"

    var prod_1 = document.createElement("p");
    prod_1.textContent = "4520";
    prod_1.style.marginTop = "-12%";
    prod_1.style.marginLeft = "70%"
    prod_1.style.fontSize = "14px";
    prod_1.style.color = "grey";


    main_div_x_1.append(x_4,star_4,prod_1);
//
    var main_div_x_2 = document.createElement("div");
    main_div_x_2.style.marginTop = "0%";

    var x_3 = document.createElement("input");
    x_3.setAttribute("type" , "checkbox");

    var star_3 = document.createElement("h4");
    star_3.textContent = "10-12 Years";
    star_3.style.fontSize = "14px";
    star_3.style.marginTop = "-6%";
    star_3.style.marginLeft = "8%"

    var prod_2 = document.createElement("p");
    prod_2.textContent = "895";
    prod_2.style.marginTop = "-12%";
    prod_2.style.marginLeft = "70%"
    prod_2.style.fontSize = "14px";
    prod_2.style.color = "grey";

    main_div_x_2.append(x_3,star_3,prod_2);


    var main_div_x_3 = document.createElement("div");
    main_div_x_3.style.marginTop = "0%";

    var x_2 = document.createElement("input");
    x_2.setAttribute("type" , "checkbox");

    var star_2 = document.createElement("h4");
    star_2.textContent = "12-14 Years";
    star_2.style.fontSize = "14px";
    star_2.style.marginTop = "-6%";
    star_2.style.marginLeft = "8%"

    var prod_3 = document.createElement("p");
    prod_3.textContent = "1596";
    prod_3.style.marginTop = "-12%";
    prod_3.style.marginLeft = "70%"
    prod_3.style.fontSize = "14px";
    prod_3.style.color = "grey";

    main_div_x_3.append(x_2,star_2,prod_3);
//
    var main_div_x_4 = document.createElement("div");
    main_div_x_4.style.marginTop = "0%";

    var x_1 = document.createElement("input");
    x_1.setAttribute("type" , "checkbox");

    var star_1 = document.createElement("h4");
    star_1.textContent = "12-18 Months";
    star_1.style.fontSize = "14px";
    star_1.style.marginTop = "-6%";
    star_1.style.marginLeft = "8%"

    var prod_4 = document.createElement("p");
    prod_4.textContent = "3857";
    prod_4.style.marginTop = "-12%";
    prod_4.style.marginLeft = "70%"
    prod_4.style.fontSize = "14px";
    prod_4.style.color = "grey";

    main_div_x_4.append(x_1,star_1,prod_4);

    var btn = document.createElement("button");
    btn.textContent = "View More";


    aged.append(main_div_x_1,main_div_x_2,main_div_x_3,main_div_x_4,btn);









    var discount_top =  document.getElementById("discount_bar_foot");



var discount = document.createElement("h3");
discount.textContent = "Discount %";
discount.style.fontSize = "14px";
discount.style.color="#ff0066";
discount.style.marginLeft="2%";
discount.style.marginTop = "-90%";

discount_top.append(discount);




var dis = document.getElementById("discount_bar_foot_sub");


    document.getElementById("discount_bar_foot_sub").innerHTML="";
    var main_div_x_1 = document.createElement("div");
    main_div_x_1.style.marginTop = "-55%";

    var x_4 = document.createElement("input");
    x_4.setAttribute("type" , "checkbox");


    var star_4 = document.createElement("h4");
    star_4.textContent = "0-10";
    star_4.style.fontSize = "14px";
    star_4.style.marginTop = "-6%";
    star_4.style.marginLeft = "8%"

    var prod_1 = document.createElement("p");
    prod_1.textContent = "4520";
    prod_1.style.marginTop = "-12%";
    prod_1.style.marginLeft = "70%"
    prod_1.style.fontSize = "14px";
    prod_1.style.color = "grey";


    main_div_x_1.append(x_4,star_4,prod_1);
//
    var main_div_x_2 = document.createElement("div");
    main_div_x_2.style.marginTop = "0%";

    var x_3 = document.createElement("input");
    x_3.setAttribute("type" , "checkbox");

    var star_3 = document.createElement("h4");
    star_3.textContent = "20-30";
    star_3.style.fontSize = "14px";
    star_3.style.marginTop = "-6%";
    star_3.style.marginLeft = "8%"

    var prod_2 = document.createElement("p");
    prod_2.textContent = "895";
    prod_2.style.marginTop = "-12%";
    prod_2.style.marginLeft = "70%"
    prod_2.style.fontSize = "14px";
    prod_2.style.color = "grey";

    main_div_x_2.append(x_3,star_3,prod_2);


    var main_div_x_3 = document.createElement("div");
    main_div_x_3.style.marginTop = "0%";

    var x_2 = document.createElement("input");
    x_2.setAttribute("type" , "checkbox");

    var star_2 = document.createElement("h4");
    star_2.textContent = "30-40";
    star_2.style.fontSize = "14px";
    star_2.style.marginTop = "-6%";
    star_2.style.marginLeft = "8%"

    var prod_3 = document.createElement("p");
    prod_3.textContent = "1596";
    prod_3.style.marginTop = "-12%";
    prod_3.style.marginLeft = "70%"
    prod_3.style.fontSize = "14px";
    prod_3.style.color = "grey";

    main_div_x_3.append(x_2,star_2,prod_3);
//
    var main_div_x_4 = document.createElement("div");
    main_div_x_4.style.marginTop = "0%";

    var x_1 = document.createElement("input");
    x_1.setAttribute("type" , "checkbox");

    var star_1 = document.createElement("h4");
    star_1.textContent = "40-50";
    star_1.style.fontSize = "14px";
    star_1.style.marginTop = "-6%";
    star_1.style.marginLeft = "8%"

    var prod_4 = document.createElement("p");
    prod_4.textContent = "3857";
    prod_4.style.marginTop = "-12%";
    prod_4.style.marginLeft = "70%"
    prod_4.style.fontSize = "14px";
    prod_4.style.color = "grey";

    main_div_x_4.append(x_1,star_1,prod_4);

    var btn = document.createElement("button");
    btn.textContent = "View More";


    dis.append(main_div_x_1,main_div_x_2,main_div_x_3,main_div_x_4,btn);

