<template>
  <el-container>
    <el-aside width="90px" default-active="1">
      <div :class="changenum==1 ?'ui backgr' :'ui'" @click="todevpent">
        <img src="../../assets/img/基本信息节点.png">
        <span>开发日志</span>
      </div>
      <div :class="changenum==2 ?'ui backgr' :'ui'"  @click="tozjzc">
        <img src="../../assets/img/发布部署节点.png">
        <span>异常日志</span>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dis: false,
      changenum:"1"
    };
  },
  created() {
    this.todevpent()
  },
  methods: {
    look() {
      this.dis = !this.dis;
    },
    todevpent(){
      this.changenum=1
      this.$router.push('/inforManager/examine')
    },
    tozjzc(){
      this.changenum=2
      this.$router.push('/inforManager/report')
    }
  },
};
</script>

<style lang="less" scoped>
.backgr{
  background: #BAD7FF;
}
.ui{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 90px;
  cursor: pointer;
  img{
    width: 25px;
  }
  span{
    font-size: 14px;
    margin-top:10px;
  }
}
.displayin {
  display: none;
}
.el-container {
  position: relative;
  .xd {
    position: absolute;
    top: 200px;
    right: 0;
    width: 50px;
    line-height: 40px;
    color: white;
    .xdcl {
      background: #0084f0;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }
    .xdmain {
      background: white;
      border: 1px solid skyblue;
    }
  }
}
.el-aside {
  background: white;
  height: calc(100vh - 52px);
}
</style>>

