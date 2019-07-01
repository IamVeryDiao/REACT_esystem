import MUtil        from 'util/mm.js'

const _mm   = new MUtil();

class User{
 
    login(loginInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
  
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);

        if(typeof username !== 'string' || username.length ===0){
            return {
                status: false,
                msg: 'Please input username!'
            }
        }
     
        if(typeof password !== 'string' || password.length ===0){
            return {
                status: false,
                msg: 'Please input password!'
            }
        }
        return {
            status : true,
            msg : 'Verification allowed'
        }
    }
    logout(){
        return _mm.request({
            type    : 'post',
            url     : '/user/logout.do'
        });
    }


}

export default User;