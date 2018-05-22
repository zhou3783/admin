import { loginByUsername,logout,getUserInfo } from "@/api/login"


const user = {
    state:{
        user:'',
        status:'',
        code:"",
        name:'',

    },
    
    mutations:{
        SET_CODE:(state,code)=>{
            state.code=code
        },
        SET_NAME:(state,name)=>{
            state.name=name
        }
    },

    actions:{
        /**
         * 用户登录
         * 
         * @param {any} {commit} 
         * @param {any} userinfo 
         * @returns 
         */
        LoginByUsername({commit},userinfo){
            const username=userinfo.username;
            return new Promise((resolve,rejects)=>{
                loginByUsername(username,userinfo.password)
                .then(response=>{
                    const data=response.data;
                    resolve()
                }).catch(error=>{
                    rejects(error);
                })
            })
        },
        /**
         * 获取用户信息
         * 
         * @param {any} {commit,state} 
         * @returns 
         */
        GetUserInfo({commit,state}){
            return new Promise((resolve,rejects)=>{
                getUserInfo(state.token).then(reponse=>{
                    const data=response.data
                    resolve()
                }).catch(error=>{
                    rejects(error);
                })
            })
        },

        LogOut({commit,state}){
            return new Promise((resolve,rejects)=>{
                logout(state.token).then(()=>{
                    resolve()
                }).catch(error=>{
                    rejects(error);
                })
            })
        }
    
    }

}

export default user