const mutations = {
     // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    // handleEid: (state, eid) => {
    //     state.eid = eid
            
    //     localStorage.setItem('user_eid',eid); // 保存eid 
    // },
    // handleEnterprise: (state, enterpriseName) => {
    //     state.enterpriseName = enterpriseName
            
    //     localStorage.setItem('user_enterpriseName',enterpriseName); // 保存公司名称 
    // },
    // handleLoginAccount: (state, loginAccount) => {
    //     state.loginAccount = loginAccount
            
    //     localStorage.setItem('user_loginAccount',loginAccount); // 保存公司名称 
    // },
    UPDATACOMPANYID:(state:any,companyId:string) =>{
        state.companyId = companyId
        localStorage.setItem('companyId',companyId); // 保存
    }
}
export default mutations