<template>
  <div class="toDo">
    <div class="toDoList">
      <h1>
        <p>正在进行的项目</p>
        <span>{{DoListLength}}</span>
      </h1>
      <div class="doListBox">
        <div class="doListBoxItem" v-for="doItem in DoList" :key="doItem.id">
          <div v-if="doItem.isOver === false">
            <button v-on:click="changeItem(doItem)"></button>
            <p>{{doItem.addDoItem}}</p>
            <a href="javascript:" v-on:click="deleteItem(doItem)">-</a>
          </div>
        </div>
      </div>
    </div>
    <div class="overList">
      <h1>
        <p>已经完成</p>
        <span>{{OverListLength}}</span>
      </h1>
      <div class="doListBox">
        <div class="doListBoxItem" v-for="doItem in DoList" :key="doItem.id">
          <div v-if="doItem.isOver === true">
            <button v-on:click="changeItem(doItem)"></button>
            <p>{{doItem.addDoItem}}</p>
            <a href="javascript:" v-on:click="deleteItem(doItem)">-</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const checkOver = doItem => {
  return doItem.isOver == false;
};
export default {
  name: "index",
  props: ["addDoItem"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // DoList：准备做的项目对象数组
      DoList: [],
      // DoListLength：准备做的项目对象数组长度
      DoListLength: 0,
      // OverListLength：已经做完的项目对象数组长度
      OverListLength: 0
    };
  },
  mounted() {},
  methods: {
    pushItem(addDoItem) {
      let me = this;
      let isOver = false;
      me.DoListLength = me.DoList.length + 1;
      let id = me.DoListLength;
      me.DoList.push({
        // addDoItem : 项目具体内容 ,isOver : 判断是否已经完成项目 false 未完成 true 完成
        addDoItem: addDoItem,
        isOver: isOver
      });
    },
    changeItem(doItem) {
      let me = this;
      let doList = me.DoList;
      for (let i = 0, len = doList.length; i < len; i++) {
        if (doList[i].addDoItem === doItem.addDoItem) {
          doList[i].isOver = !doList[i].isOver;
          break;
        }
      }
      let DoListLength = doList.filter(checkOver).length;
      me.DoListLength = DoListLength;
      me.OverListLength = doList.length - DoListLength;
    },
    deleteItem(doItem) {
      let me = this;
      let removeItem = "";
      let doList = me.DoList;
      for (let i = 0, len = doList.length; i < len; i++) {
        if (doList[i].addDoItem === doItem.addDoItem) {
          removeItem = doList.splice(i, 1);
          break;
        }
      }
      let DoListLength = doList.filter(checkOver).length;
      me.DoListLength = DoListLength;
      me.OverListLength = doList.length - DoListLength;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toDo {
  display: warp;
  width: 100%;
  min-width: 600px;
  justify-content: center;
  align-items: center;
}
.toDo .toDoList,
.toDo .overList {
  display: flex;
  width: 52%;
  margin: auto;
  margin-top: 24px;
  min-width: 600px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.toDo .toDoList h1,
.toDo .overList h1 {
  display: flex;
  width: 100%;
  height: 60px;
  background: #4f7facf6;
  justify-content: space-between;
  align-items: center;
}
.toDo .toDoList h1 p,
.toDo .overList h1 p {
  margin-left: 20px;
}
.toDo .toDoList h1 span,
.toDo .overList h1 span {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  line-height: 40px;
  background: #6299cca9;
  border-radius: 50%;
}
.toDo .toDoList h1 span {
  background: #706050ec;
}
.toDo .doListBox {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.toDo .doListBox .doListBoxItem {
  position: relative;
  display: flex;
  width: 98%;
  line-height: 40px;
  list-style: none;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.toDo .overList .doListBox .doListBoxItem div {
  border-bottom: 2px solid #706050ec;
}
.toDo .doListBox .doListBoxItem div {
  position: relative;
  display: flex;
  width: 98%;
  /* height: 40px; */
  /* border-bottom: 2px solid #4cb86c; */
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.toDo .doListBox .doListBoxItem button {
  position: absolute;
  left: 12px;
  width: 22px;
  height: 22px;
  border: 0;
  cursor: pointer;
}
.toDo .overList .doListBox .doListBoxItem button {
  background: #706050ec;
}
.toDo .doListBox .doListBoxItem a {
  position: absolute;
  right: 12px;
  width: 20px;
  height: 20px;
  border: 4px solid #54cf5ed7;
  border-radius: 50%;
  background: #d3c0c0d2;
  line-height: 20px;
}
.toDo .overList .doListBox .doListBoxItem a {
  border: 4px solid #706050ec;
}
.toDo .overList .doListBox .doListBoxItem h1 {
  background: #9e9a96;
}
</style>
