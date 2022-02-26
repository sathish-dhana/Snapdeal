import signUpForm from "/components/signUp.js";

var openPopupBtn = document.querySelector("#drop1")
openPopupBtn.innerHTML = signUpForm();

console.log("icame")

var closePopupBtn = document.querySelector(".popup_close_btn")


openPopupBtn.addEventListener("click" , function(){

    document.body.classList.add("popup-active")
});
closePopupBtn.addEventListener("click" , function(){
    document.body.classList.remove("popup-active")
})
var Regsitor = document.getElementById("drop1").addEventListener("click",function(){
    Register();
  });


let Register = async() =>{
    try{

      let register_data = {
        name:document.getElementById("name1").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,
   
    }
   
if( register_data.name == '' ||  register_data.email == '' ||  register_data.password == '' || register_data.username == '' || register_data.mobile == '' || register_data.description == '' ){
    alert("Please all details....")
}
else{

    var register_data1 = JSON.stringify(register_data)

    let res = await fetch ("https://masai-api-mocker.herokuapp.com/auth/register",{

        method:"POST",
        body:register_data1,

        headers:{
            "Content-Type":"application/json"
        },
    });
    let data = await res.json ()
    console.log("Regsiter data",data)
    if(data.message == "Registration Success")

    {
        alert("Registration Successfull")
    }
    else
    {
        alert("Registration Failed .  User already exits ")
    }
    window.location.href="login.html"
}
 

    }
catch(error){
    console.log(error)

}
};


