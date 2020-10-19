import React from 'react'
const confirmOrderContext = React.createContext({
    ingredients :{}, 
    price : 0,
    onConfirmOrder: () =>{},
    onCancelOrder: () =>{}
});

export default confirmOrderContext;