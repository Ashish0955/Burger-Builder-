import React, {Component} from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggleHandler = () => {
        
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer}        }
            );
    }

    render() {
        return (
        <Aux>
            
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer
                    open = {this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </Aux>
        )
    }
}   

export default Layout;