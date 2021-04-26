import React from 'react';


function CurrentBalance(props){

    return(
        <div>
        
        <h4 style={{color:'black',marginBottom:0}}>Your Balnace</h4>
        <h4 style={{marginTop:0}}>{props.balance}</h4>
        </div>
    )
}

export default CurrentBalance;