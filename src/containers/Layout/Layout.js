import React,{Component} from 'react';
import Burger from '../../components/BurgerBuilder/Burger/Burger'

class Layout extends Component{
    tempdata = {
        meat:2,
        cheese:0,
        salad:1,
        bacon:1
    }
    render(){
        return(
            <React.Fragment>
                <div>ToolBar here</div>
                <Burger ingredients={this.tempdata}/>
            </React.Fragment>
        );
    }
}

export default Layout