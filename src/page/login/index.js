import React from 'react';
import "./index.scss";
import MUtil from 'util/mm.js';
import User from 'service/user-service.js';
const _mm = new MUtil();
const _user = new User();

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			username: '',
			password: '',
			redirect: _mm.getUrlParam('redirect') || '/'
		}
	}
	componentWillMount(){
		document.title = 'LOGIN - HAPPY MANAGE';
	}
	onInputChange(e){
		let inputName = e.target.name,
			inputValue = e.target.value;
		this.setState({
			[inputName]: inputValue
		});
	}

    onSubmit(){
        let loginInfo = {
                username : this.state.username,
                password : this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);
   
        if(checkResult.status){
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }

        else{
            _mm.errorTips(checkResult.msg);
        }
            
    }

	render(){
		return (
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default login-panel">
						  <div className="panel-heading">
						    <h3 className="panel-title">WELCOME-HAPPY MANAGE</h3>
						  </div>
						  <div className="panel-body">
						  <div>
							  <div className="form-group">
							    <label>Username</label>
							    <input 
								    type="text" 
								    name="username"
								    className="form-control" 
								    placeholder="please input Username"
								    onChange={e => this.onInputChange(e)}/>
							  </div>
							  <div className="foNamerm-group">
							    <label>Password</label>
							    <input 
								    type="password"
								    name="password"
								    className="form-control" 
								    placeholder="please input Password"
								    onChange={e => this.onInputChange(e)}/>
							  </div>
							  <br/>
							  <button  
								  className="btn btn-lg btn-primary btn-block"
								  onClick={e=>this.onSubmit(e)}
								  >Login</button>
							</div>  
						  </div>
					</div>
				</div>

		);
	}
}

export default Login;