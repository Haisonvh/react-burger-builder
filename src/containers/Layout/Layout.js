import React,{Component} from 'react';
import BurgerBuilder from '../../components/BurgerBuilder/BurgerBuilder'

class Layout extends Component{    
    render(){
        return(
            <React.Fragment>
                <div>ToolBar here</div>
                <BurgerBuilder/>
            </React.Fragment>
        );
    }
}

export default Layout