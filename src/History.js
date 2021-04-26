import React from 'react';
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa"

let id=1;
const History=(props)=>{
console.log(props);
const deleteItem=(id)=>{
const docref=firebase.firestore().collection('Expenses').doc(id);
docref.delete().then(()=>{
    console.log("succesfully delted")
}).catch((error)=>{
    console.log("error in deltion"+error);
})
}
    return(
        <table border="1" style={{margin:'auto',marginBottom:20}}>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>DeleteItem</th>
        </tr>
        
        {
            props.history.map((curr)=>{
           return(
            <tr key={id++}>
            <td style={{fontWeight:'bold',padding:10}}>{curr.Text}</td>
            <td style={{fontWeight:'bold',padding:10}}>{curr.Amount}</td>
            <td><button id={curr.id} onClick={(e)=>deleteItem(e.target.id)} >{ FaTrashAlt } delete</button></td>
            </tr>
           ) 


            })
       
        }
        

        </table>
    )
}
export default History;