import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sideDrawerShow: false
        }
    }
    sideDrowerHandler = () => {
        this.setState({
            sideDrawerShow: !this.state.sideDrawerShow
        })
    }

    render() {
        return (
            <div>
                <Toolbar openSideDrawer = {this.sideDrowerHandler} />
                <SideDrawer open={this.state.sideDrawerShow} closed={this.sideDrowerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;