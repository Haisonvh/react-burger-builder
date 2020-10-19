import React from 'react';
import IngredientControl from './IngredientControl/IngredientControl';
import classes from './IngredientControls.module.css';

const IngredientControls = (props) => {
    const controls = Object.keys(props.controls).map((ctKey) =>{
        let el = props.controls[ctKey];
        return <IngredientControl label = {el["type"]} 
                    onRemove = {el["onRemove"]}
                    onAdd = {el["onAdd"]}
                    disableLess = {el["disableLess"]}
                    key = {el["type"]}/>
    });    
   
    return (
        <div className = {classes.IngredientControls}>
            <label style = {{fontWeight:'bold'}}>Total price: {props.totalPrice}</label>
            {controls}
            <button className= {classes.OrderButton}
                    disabled = {props.disableOrder}
                    onClick = {props.onClickOrderNow}>Order now</button>
        </div>
    );
};

export default IngredientControls;