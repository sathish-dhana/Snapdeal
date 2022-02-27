function signUpForm() {
    return `
    <span style="font-size: 16px;" class="fa-solid fa-user-plus"> </span><span id="user">&nbsp; Sign-in</span>
    <div class="popup-overlay"></div>
    <div class="popup">
        <h5 id="name">Sign Up On Snapdeal</h5>
        <p id="p">Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal.</p>
        <form>
            <input type="text" id="name1" class="input" placeholder="Name" />
            <input type="email" id="email" class="input"  placeholder="Email" />
            <input type="password" id="password" class="input"  placeholder="Password" />
            <input type="text" id="username" class="input"  placeholder="Username" />
            <input type="number" id="mobile" class="input"  placeholder="Number" />
            <input type="text" id="description" class="input"  placeholder="Description" />
          </form>
        <button id="continue">CONTINUE</button>
        <P id="p" style="text-align: center;"> or Login Using</P>
        <div id="div" >
            <button onclick="window.location.href='https://www.facebook.com/login/'" href="" id="facebook"><i id="fafa" class="fa fa-facebook-official" aria-hidden="true"></i><a id="afacebook">Facebook</a></button>
            <button onclick="window.location.href='https://myaccount.google.com/'" href="" id="google"><i id="fafa1" class="fa fa-google" aria-hidden="true"></i><a id="agoogle">Google</a></button>

        </div>
       
        <a href="" style="text-decoration: none;" class="popup_close_btn">&times;</a> 
    </div>
   
     <div class="popup-overlay1"></div>`
}

function login1() {
    return ` Log-In
    <div class="popup-overlay2"></div>
    <div class="popup1">
        <h5 id="name1">Login On Snapdeal</h5>
        <p id="p1">Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal.</p>
        <form>
            <input type="text" id="login-username" class="input1" placeholder="Name" />
            <input type="password" id="login-password" class="input1" placeholder="Password" />
          </form>
        <button id="continue1">CONTINUE</button>
        <P id="p1" style="text-align: center;"> or Login Using</P>
        <div id="div1" >
            <button onclick="window.location.href='https://www.facebook.com/login/'" href="" id="facebook1"><i id="fafa1" class="fa fa-facebook-official" aria-hidden="true"></i><a id="afacebook1">Facebook</a></button>
            <button onclick="window.location.href='https://myaccount.google.com/'" href="" id="google1"><i id="fafa2" class="fa fa-google" aria-hidden="true"></i><a id="agoogle1">Google</a></button>

        </div>
       
        <a href="" style="text-decoration: none;" class="popup_close_btn1">&times;</a> 
    </div>`
}
export {signUpForm, login1};