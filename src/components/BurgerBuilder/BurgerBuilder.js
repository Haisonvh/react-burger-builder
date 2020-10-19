
import React, {Component} from 'react';
import Burger from './Burger/Burger';
import IngerdientControls from './IngredientControls/IngredietControls';
import OrderSummary from './OrderSummary/OrderSummary';
import ConfirmOrderContext from '../../contexts/ConfirmOrderContext';


class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingerdients:{
                meat:0,
                cheese:0,
                salad:0,
                bacon:0
            },
            controls:{
                meat:{
                    type:"Meat",
                    onRemove: ()=>this.onRemoveHandel("meat"),
                    onAdd: ()=>this.onAddHandel("meat"),
                    disableLess:true
                },
                cheese:{
                    type:"Cheese",
                    onRemove: ()=>this.onRemoveHandel("cheese"),
                    onAdd: ()=>this.onAddHandel("cheese"),
                    disableLess:true
                },
                salad:{
                    type:"Salad",
                    onRemove: ()=>this.onRemoveHandel("salad"),
                    onAdd: ()=>this.onAddHandel("salad"),
                    disableLess:true
                },
                bacon:{
                    type:"Bacon",
                    onRemove: ()=>this.onRemoveHandel("bacon"),
                    onAdd: ()=>this.onAddHandel("bacon"),
                    disableLess:true
                }
            },
            disableOrder:true,
            totalPrice:0,
            showOrderSummary:false
        }
    }
    
    ingredientPrice = {
        meat:1.2,
        cheese:0.6,
        salad:0.4,
        bacon:1
    }
    
    onRemoveHandel = (type) =>{
        this.setState(preState => {
            let newPrice = (preState.totalPrice - this.ingredientPrice[type]).toFixed(2);
            
            let ingredients = preState.ingerdients;
            ingredients[type]-=1;

            let controls = preState.controls;
            controls[type]['disableLess'] = (ingredients[type] === 0);
            
            return {ingerdients:ingredients,
                controls:controls,
                totalPrice:parseFloat(newPrice),
                disableOrder: (parseFloat(newPrice)===0)}
        })     
    };

    onAddHandel = (type) =>{
        this.setState(preState => {
            let newPrice = (preState.totalPrice + this.ingredientPrice[type]).toFixed(2);
            
            let ingredients = preState.ingerdients;
            ingredients[type]+=1;
          
            let controls = preState.controls;
            controls[type]['disableLess'] = false;
            
            return {ingerdients:ingredients,
                controls:controls,
                totalPrice:parseFloat(newPrice),
                disableOrder:false}
        })      
    };

    onOrderClickHandel = () =>{
        this.setState({showOrderSummary:true});
    }

    onCancelOrder = () =>{
        this.setState({showOrderSummary:false});
    }

    onConfirmOrder = () => {
        console.log("confirm order");
        this.setState({showOrderSummary:false});
    }

    render(){
        
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingerdients}/>
                <IngerdientControls controls = {this.state.controls} 
                    disableOrder = {this.state.disableOrder}
                    totalPrice = {this.state.totalPrice}
                    onClickOrderNow = {this.onOrderClickHandel}/>

                <ConfirmOrderContext.Provider
                    value = {{
                        ingredients : this.state.ingerdients, 
                        price : this.state.totalPrice,
                        onCancelOrder: this.onCancelOrder,
                        onConfirmOrder: this.onConfirmOrder    
                    }}>
                    {this.state.showOrderSummary ? 
                        <OrderSummary onCancelOrder = {this.onCancelOrder}/>
                        :null}
                </ConfirmOrderContext.Provider>    
                
            </React.Fragment>
        );
    };
}

export default BurgerBuilder;