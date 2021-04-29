import React from 'react';
import signup from "./Css/signup.css";
import avatar from './img/avatar.png'; 
import {Link,Redirect} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";

const Signup = () => {

   
     
    const [username,setusername]=React.useState("");
    const [userpassword,setuserpassword]=React.useState("");
    const [cpassword,setcpassword]=React.useState("");
    let   [alert,setalert]=React.useState(false);
    let [passworderr,setpasserr]=React.useState(false);
    let [passlen,setpasslen]=React.useState(false);
  let [signupalert,setsignupalert]=React.useState(false);
            
    const addUser=(e)=>{
          e.preventDefault();
   
           let userExist=false;
    firebase.firestore().collection('users').get().then((snapshot)=>{

        snapshot.docs.map((doc)=>{
            let name=doc.data().Username
            if(name==username){
                 console.log(username);
                 userExist=true;         
                 alert=true;
         
  }

        })

        if(userExist==true){
          setalert(true);
        
            console.log("galat hua");
      
 
    return;  }
        else{
            setalert(false);

console.log(username+" "+userpassword+" "+cpassword)
            if(username !=""&& userpassword !=""&& cpassword !=""){
                     
                if(userpassword != cpassword){
                   setpasserr(true);
                }
                else{
                    setpasserr(false);
                }
               

if(userpassword.length <6){
    setpasslen(true);
}
else{
    setpasslen(false);

firebase.firestore().collection('users').add({
  Username:username,
  Password:userpassword  
}).then(()=>{
    console.log("succesfully added");
   setsignupalert(true);
}).catch((error)=>{
    console.log("error");
    
})

}



            }
              
        }
        
  
    })

}

    const logo = require('./img/avatar.png');
    return (
        <div className="signup-component">

        {signupalert && 
<div>
<h3 style={{color:"green",fontFamily: "fangsong",textAlign:"center"}}>Your Account is succesfully created.!</h3>
</div>

        }
     
<div className="signup_wrapper">

{alert && <h3 style={{color:"red"}}>Username already Exist</h3>}
{passworderr && <h3 style={{color:"red"}}>Password not match</h3>}
{passlen && <h3 style={{color:"red"}}>Password should contains more than 6 Character</h3>}
<form className="form">

{<img src={avatar} />}
<h2>SignUp</h2>
<div className="input_group">
<input type="text" autoComplete="off" value={username} onChange={(e)=>{setusername(e.target.value)}} id="username" required />
<label for="username">Email</label>
</div>

<div className="input_group">
<input type="password" autoComplete="off" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}} id="userpassword" required />
<label for="userpassword">Password</label>
</div>
<div className="input_group">
<input type="text" autoComplete="off" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} id="userpassword" required />
<label for="userpassword">Confirmpassword</label>
</div>


<button className="btn" onClick={addUser}>Submit</button>
<div><p>
Already have account?<Link to="/login" style={{position:"relative",marginRight:"auto",color:"yellow",textDecoration:"none",fontSize:"15px"}}>Login</Link>
</p>
</div>
</form>


</div>







    </div>
    )
}

export default Signup








