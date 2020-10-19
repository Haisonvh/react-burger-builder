import React from 'react';
import Detail from './Detail/Detail'
import Backdrop from '../../Backdrop/Backdrop'

const OrderSummary = (props) => {
    
    return (
        <React.Fragment>
            <Backdrop isShow = {true} onClick = {props.onCancelOrder}/>
            <Detail/>
        </React.Fragment>
    );
}



export default OrderSummary;