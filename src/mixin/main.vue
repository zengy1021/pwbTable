<template>
  <div></div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
    // computed:mapState({
    //     companyId:state=>state.companyId
    // }),
    watch:{ // 暂时不用
        'this.$store.state.companyId':{
            handler(val){
                debugger
                if(val){
                    this.$router.replace(this.$router.name)
                }
            },
            immediate:false
        }
    }
}
</script>
