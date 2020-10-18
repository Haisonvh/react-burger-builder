import classes from './Burger.module.css';
import React from 'react';
import Ingredient from './Ingredient/Ingredient'

const burger = (props) => {
    let dataIngredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return(
                [...Array(props.ingredients[igkey])].map((_,index) => {
                    console.log(igkey);
                    return (                       
                        <Ingredient type= {igkey} key={igkey+index} />
                    );
                })
            );
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (dataIngredients.length === 0){
        dataIngredients = <p>Please add ingredient</p>;
    };    
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {dataIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
}

export default burger;