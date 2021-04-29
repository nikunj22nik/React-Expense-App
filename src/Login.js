import React from 'react'
import avatar from './img/avatar.png';
import bg from './img/bg.jpg';
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";

import login from "./Css/login.css"

import {Link, Redirect, Switch} from "react-router-dom";
const Login = () => {

const [username,setusername]=React.useState("");
const [userpassword,setuserpassword]=React.useState("");
const [userfound,setuserfound]=React.useState(false);
const [invalidUser,setinvalidUser]=React.useState(false);
const loginuser=(e)=>{
  e.preventDefault();
console.log("hiii");
firebase.firestore().collection("users").get().then((snapshot)=>{
let found=false;
snapshot.docs.map((doc)=>{
  let user=doc.data().Username;
  let pass=doc.data().Password;

  if(username==user&&pass==userpassword){
    setuserfound(true);
  found=true;}

})

if(found==false){
setinvalidUser(true);
}

})

}
let path="expenseapp/"+username;
    const logo = require('./img/avatar.png');
    return (

        <div className="login-component">
        {invalidUser &&
<div> 
<h3 style={{color:"red",textAlign:"center"}}>!User Not Exist.</h3>
</div>
        }
{ userfound && <Switch> <Redirect to={path} /></Switch>  }

      <div className="login-wrapper">

      <form className="form">

   {<img src={avatar} /> }
    <h2>Login</h2>

     <div className="input-group" style={{color:"black"}}>
     <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} autoComplete="off" id="username" required />
       <label for="username">User Name</label>

      </div>

<div className="input-group" style={{color:"black"}}>
<input type="password" name="userpassword" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}} autoComplete="off" id="userpassword" required />
<label for="username">User Password</label>
</div>

<button className="submit-btn" id="btn" onClick={loginuser}>Login</button>
<div>
<p>
Don't have account?<Link to="/signup" className="forgot-pw" style={{position:"relative",marginRight:"auto",color:"yellow",textDecoration:"none",fontSize:"15px"}}>SignUp</Link>
</p>
</div>
</form>
</div>      
</div>
    )
}

export default Login

