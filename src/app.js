import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';


import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';

class App extends React.Component{
	render(){
		return (
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
					</Switch>
				</Layout>
			</Router>
		)
	}
}





ReactDOM.render(
	<App/>,
	document.getElementById('app')
);