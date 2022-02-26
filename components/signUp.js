function signUpForm() {
    return `
    <span style="font-size: 16px;" class="fa-solid fa-user-plus"> </span>
    <span id="user">&nbsp; Sign-in</span>
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
        <button onclick="Register()" id="continue">CONTINUE</button>
        <P id="p" style="text-align: center;"> or Login Using</P>
        <div id="div" >
            <button onclick="window.location.href='https://www.facebook.com/login/'" href="" id="facebook"><i id="fafa" class="fa fa-facebook-official" aria-hidden="true"></i><a id="afacebook">Facebook</a></button>
            <button onclick="window.location.href='https://myaccount.google.com/'" href="" id="google"><i id="fafa1" class="fa fa-google" aria-hidden="true"></i><a id="agoogle">Google</a></button>

        </div>
       
        <a href="" style="text-decoration: none;" class="popup_close_btn">&times;</a> 
    </div>
     <div class="popup-overlay1"></div>`
}
export default signUpForm;