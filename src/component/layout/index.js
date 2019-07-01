import React from 'react';

import NavTop from 'component/nav-top/index.js';
import NavSide from 'component/nav-side/index.js';
import Home from 'page/home/index.js';
import './theme.css';

class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id='wrapper'>
				<NavTop/>
				<NavSide/>
				<Home/>
				{this.props.child}
			</div>
		)
	}
}

export default Layout;