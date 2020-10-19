import React from 'react';
import classes from './IngredientControl.module.css'

const IngredientControl = (props) =>{
    return(
        <div className = {classes.IngredientControl}>
            <label className = {classes.Label}>{props.label}</label>
            <button 
                className = {classes.Less}
                onClick = {props.onRemove}
                disabled = {props.disableLess}>Less</button>
            <button 
                className = {classes.More}
                onClick = {props.onAdd}>More</button>
        </div>
    );
}

export default IngredientControl;