import navbar from "/components/navBar.js"
import footerFin from "/components/footerNav.js";

    let head = document.querySelector("#header1");
    head.innerHTML = navbar();

    let foot = document.querySelector("#expftr");
    foot.innerHTML = footerFin();

    let arr = ["https://i.pinimg.com/originals/61/47/12/614712f5f6f0ea8e80c77e9ed9bc2359.jpg", "https://www.incimages.com/uploaded_files/image/1920x1080/getty_159281926_117506.jpg", "https://i.ytimg.com/vi/mkqeUk6ylkc/maxresdefault.jpg", "https://www.adgully.com/img/800/202104/snapdeal-campaign-2.jpeg", "https://dog55574plkkx.cloudfront.net/images/snapdeal-offers-today.jpg", "https://img4.goodfon.com/wallpaper/nbig/9/20/model-girl-blonde-long-hair-straight-hair-hair-in-the-wind-1.jpg"]
    let i = 0;
    changeimage();

    function changeimage() {
            let x = setInterval(() => {
                var slide = document.querySelector("#slideimg");
                slide.setAttribute("src", arr[i]);
                i++;
                if(i >= arr.length) {
                    i = 0;
                }
            }, 3000);
    }

    let dom1 = document.querySelector("#snapdeal");
    dom1.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[3]);
    });

    let dom2 = document.querySelector("#health");
    dom2.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[0]);
    });

    let dom3 = document.querySelector("#style");
    dom3.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[1]);
    });

    let dom4 = document.querySelector("#girl");
    dom4.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[5]);
    });

    let dom5 = document.querySelector("#india");
    dom5.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[3]);
    });
    var count = 1;
    var item = document.getElementById("hovDiv");
    item.addEventListener("click", () => {
        var dd = document.getElementById("dropdown");
        let t = document.getElementById("hovDiv");
        if(count%2 != 0) {
            t.style.backgroundColor = "#333333";
            dd.style.display = "block";
        } else {
            t.style.backgroundColor = "#F5004B";
            dd.style.display = "none";
        }
        count++;        
    });

    var count2 = 1;
    var item = document.getElementById("changebut");
    item.addEventListener("click", () => {
        var xy = document.querySelector("#domchange");
        if(count2 % 2 != 0) {
            let pinCode = document.querySelector("#domchange>input").value;
            console.log(pinCode);
            xy.innerHTML = "";
            let p = document.createElement("h3");
            if(pinCode > 600000 && pinCode < 600020) {
                p.innerHTML = "Availlable"
                xy.append(p);
            } else {
                p.innerHTML = "UnAvaillable"
                xy.append(p);
            }   
            document.querySelector("#changebut").innerHTML = "Check Again";
        } else {
            xy.innerHTML = "";
            let inp = document.createElement("input");
            inp.placeholder = "Enter pincode";
            xy.append(inp);
            document.querySelector("#changebut").innerHTML = "Submit";
        } 
        count2++;
    });