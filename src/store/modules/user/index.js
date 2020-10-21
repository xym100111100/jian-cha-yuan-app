import { loginData } from "../../../api/user";
let modules = {
    namespaced: true,
    state: {
        uid:  "",
       
    },
    getters: {//有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

    },
    mutations: {
        ["SET_LOGIN"](state, payload) {
            state.uid = payload.uid;
        },
       
    },
    actions: {
        //会员登录
        login(conText, payload) {
            loginData(payload).then(res => {
                if (res.code === 200) {
                    conText.commit("SET_LOGIN", { uid: res.data.uid, nickname: res.data.nickname, isLogin: true, authToken: res.data.auth_token });
                }
                if (payload.success) {
                    payload.success(res)
                }
            })
        },
       
      
    }
}
export default modules;