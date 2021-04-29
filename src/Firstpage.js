import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
 import React from 'react';
import App from './App';

import Signup from "./signup";  

const Firstpage=()=>{

   

    return(
<div>
<BrowserRouter>
<Switch>

<Route exact path="/signup" component={Signup}></Route>
<Route exact path="/expenseapp" component={App}></Route>
</Switch>    
</BrowserRouter>
</div>

 );

}


export default Firstpage;
