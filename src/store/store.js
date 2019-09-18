import Vue from 'vue' //引入Vue
import Vuex from 'vuex' //引入Vuex

// 使用vuex
Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store({
    state:{
        addDoItem:"",
    },
    getters:{
        getAddDoItem:state=>{
            return state.addDoItem
        }
    },
    mutations:{
        setAddDoItem(state,item){ 
            state.addDoItem = item 
        }
    },
    actions:{
        setItem(context,item){
            context.commit("setAddDoItem",item)
        }
    }
})

export default store;  //导出store 