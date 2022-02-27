var openPopupBtn = document.querySelector("#drop1")
var closePopupBtn = document.querySelector(".popup_close_btn")

openPopupBtn.addEventListener("click" , function(){
    document.body.classList.add("popup-active")
});
closePopupBtn.addEventListener("click" , function(){
    document.body.classList.remove("popup-active")
});

var Regsitor = document.getElementById("continue").addEventListener("click",function(){
    Register()
});

async function Register(){
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
            console.log(data);
            if(data.message == "Registration Success") {
                alert("Registration Successfull");
                document.body.classList.remove("popup-active");
                }
            }
        }
        catch(error){
            // console.log(error);
        }
    };




var openPopupBtn1 = document.querySelector("#drop3")
var closePopupBtn1 = document.querySelector(".popup_close_btn1")


openPopupBtn1.addEventListener("click" , function(){

    document.body.classList.add("popup-active2")
});
closePopupBtn1.addEventListener("click" , function(){

    document.body.classList.remove("popup-active2")
})
var login=document.getElementById("continue1").addEventListener("click",function(){
    Login()
  })

let Login = async()=>{
 
    try{
        let login_data={
            username:document.getElementById("login-username").value,
            password:document.getElementById("login-password").value,
        };
     let login_data_json=JSON.stringify(login_data)
  
     let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
  
        method:"POST",
        body:login_data_json,
  
        headers:{
                 "Content-Type":"application/json",
             },
  
     })
     let data=await res.json();
     console.log(data)
     getuser(login_data.username,data.token)
     
    }
  catch(err){
     console.log(err)
  }
  }
  // 00b7270130eb73f406d9cf06e4b93fe1
  
  let getuser = async (username,token) => {
  
  try{
  
  let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
  
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`,
    },
  })
  
  let data = await res.json();
  console.log("userdata",data)
  if(data.message == "Invalid token for user")
  { 
      alert("Invalid Password or Username")
  }
  else
  {
      alert("Login Sucessfull")
      window.location.href="Home.html"
}
//   showname(data)
  
  }
  catch (error){
  console.log(error)
  
  }
  

  
  };


