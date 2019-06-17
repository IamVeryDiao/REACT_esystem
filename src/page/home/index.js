import React from 'react';
import PageTtile from 'component/page-title/index.js';
import './index.scss';


class Home extends React.Component{
	render(){
		return (
			<div id="page-wrapper">
				<PageTtile title='Home Page'/>
				<div className="row">
					<div className="col-md-12">
						body
					</div>
				</div>
			</div>

		);
	}
}

export default Home;