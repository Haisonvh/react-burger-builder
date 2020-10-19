import React from 'react';
import classes from './Detail.module.css';
import ConfirmOrderContext from '../../../../contexts/ConfirmOrderContext'

const Detail = (props) => {
    
    const data = React.useContext(ConfirmOrderContext);

    let summary = Object.keys(data.ingredients).map((igKey) =>{
        return( <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {data.ingredients[igKey]}
                </li> );
    });   

  
    return (
        <div className={classes.Detail}>
            <h3>Your order</h3>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price: {data.price}</strong></p>
            <p>Continue to Checkout?</p>
            <button className = {classes.Cancel} onClick = {data.onCancelOrder}>CANCEL</button>
            <button className = {classes.Submit} onClick = {data.onConfirmOrder}>CONTINUE</button>
        </div>
    );
};

export default Detail;