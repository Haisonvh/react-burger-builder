import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return(
        props.isShow ? <div className={classes.Backdrop} onClick = {props.onClick}/> :null
    );
};

export default Backdrop;