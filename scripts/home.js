import navbar from "/components/navBar.js"

    let head = document.querySelector("#header1");
    head.innerHTML = navbar();

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