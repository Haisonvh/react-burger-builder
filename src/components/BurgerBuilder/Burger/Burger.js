import classes from './Burger.module.css';
import React from 'react';
import Ingredient from './Ingredient/Ingredient'

const Burger = (props) => {
      
    let dataIngredients = Object.keys(props.ingredients)
        .map((igkey) => {            
            return(
                //return the array of array ingredient base on the number of each ingredient
                [...Array(props.ingredients[igkey])].map((_,index) => {                    
                    return (                       
                        <Ingredient type= {igkey} key={igkey+index} />
                    );
                })
            );
        })
        .reduce((arr, el) => {
            // merge into 1 array
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

export default Burger;