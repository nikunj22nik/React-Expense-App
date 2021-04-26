import React from 'react';
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";

const AddTransaction=()=>{
const [text,settext]=React.useState("");
const [amount,setamount]=React.useState("");
const addingToDatabase=(e)=>{
      e.preventDefault();
      if(text ==""&&amount ==""){
        alert("please fill all the entry");
          return;
      }
      if(amount.charAt(0)=='-'){
          let originalAmount=parseInt(amount.substring(1));
           console.log(originalAmount);
      firebase.firestore().collection('Expenses').add({

Amount:originalAmount,
Text:text,
income:0,
Expense:amount
       }).then((docRef)=>{
console.log(docRef+"succesfully addes");
      
    
     }).catch((error)=>{
           console.log("error:"+error);
       })
console.log("help me");
    }else{
       
       // console.log(originalAmount);
   firebase.firestore().collection('Expenses').add({

Amount:amount,
Text:text,
income:amount,
Expense:0
    }).then((docRef)=>{
console.log(docRef+"succesfully addes");
   
 
  }).catch((error)=>{
        console.log("error:"+error);
    })
console.log("help me");
    
    }
      console.log(text+" "+amount);
    settext("");
    setamount("");

 }

return (
    <div style={{marginBottom:5}}>
    <h4 style={{marginBottom:0}}>Add Transaction</h4>
    <img src="https://miro.medium.com/max/3288/1*QWL8FlOH8HACzfcMW6K8QA.png" width='210'/>
   
    <div className="form">
    <form style={{marginBottom:20}} onSubmit={addingToDatabase}>
   <h2 style={{marginBottom:0,marginLeft:0}}> Text</h2>
    <input className="expenseName" type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Enter Text"/>
    
    <h2 style={{marginBottom:0,marginLeft:0}}>Amount</h2>
    <p style={{marginTop:0}}>(Expense=-Negative,Income=+Positive)</p>
    <input className="expenseName" type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter Amount"/>
    <br></br>
    <br></br>
    <button className='btn'>Add Transaction</button>
</form>
</div>
</div>
);

}

export default AddTransaction;