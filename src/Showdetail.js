import React from 'react';

function Showdetails(props){

return(
<div className="details">

<div className="income">
Income ↑
<p>Rs.{props.income} </p>
</div>
<div className="expense"> Expense ↓
<p>Rs.{props.expense} </p>
</div>
</div>
)

}
export default Showdetails