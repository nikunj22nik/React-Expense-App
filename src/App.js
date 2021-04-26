import React from 'react';
import './App.css';
import Navbar from './Navbar';
import CurrentBalance from './currentblanace';
import Showdetails from './Showdetail';
import History from './History';
import AddTransaction from './Addtransaction';
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";

let expense1=0;
  let income1=0;
  
  let arr=[];
  let total=0;
let count=0;
  const App =()=> {
  const [alldata,setdata]=React.useState([]);
  const [alerterror,setError]=React.useState("");  
  React.useEffect(()=>{
    console.log("hii ine the useEffect");
    firebase.firestore().collection('Expenses').onSnapshot((snapshot)=>{
        console.log(snapshot+"hii");
    arr=[];
    expense1=0;
    income1=0; 
        snapshot.docs.map((doc)=>{
          let data=doc.data();
          data['id']=doc.id;
            arr.push(data);
            expense1+=parseInt(doc.data().Expense);
            income1+=parseInt(doc.data().income);
        
      })
      total=parseInt(income1)+parseInt(expense1);
    
      setdata(arr);
    count=count+1;
//console.log(count+" "+"times");
      })
  },[]) 

 



  

    return (
    <div className="App">
      <Navbar/>
      <CurrentBalance balance={total} />
      <Showdetails income={income1} expense={expense1}/>
      <h3 style={{marginBottom:0}} >Your History</h3>
      <img src="https://miro.medium.com/max/3288/1*QWL8FlOH8HACzfcMW6K8QA.png" width='210'/>
      <History history={arr}/>
      <AddTransaction />
    </div>
    )

  }


export default App;
