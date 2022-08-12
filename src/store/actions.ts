const actions = {
      //   actionsAdd({commit},n){//commit必须是对象!要加{}
  //     commit("mutationsAddCount",n)
  //   },
  //   actionsAdds({commit},n){
  //    commit("mutationsAddCounts",n)
  //  }
  updateCompanyId(context:any,data:string){
    context.commit("UPDATACOMPANYID",data)
  }
}
export default actions