<template>
  <el-container>
    <el-aside width="90px" default-active="1">
      <div :class="changenum == 1 ? 'ui backgr' : 'ui'" @click="todevpent">
        <img src="../../assets/img/基本信息节点.png" />
        <span>基本信息</span>
      </div>
      <div :class="changenum == 2 ? 'ui backgr' : 'ui'" @click="tozjzc">
        <img src="../../assets/img/应用数据节点.png" />
        <span>应用数据</span>
      </div>
      <div :class="changenum == 3 ? 'ui backgr' : 'ui'" @click="tozjgl">
        <img src="../../assets/img/处理流程节点.png" />
        <span>处理流程</span>
      </div>
      <div :class="changenum == 4 ? 'ui backgr' : 'ui'" @click="tosj">
        <img src="../../assets/img/可视化设计节点.png" />
        <span>可视化</span>
      </div>
      <div :class="changenum == 5 ? 'ui backgr' : 'ui'" @click="tobs">
        <img src="../../assets/img/发布部署节点.png" />
        <span>发布部署</span>
      </div>
    </el-aside>
    <!-- <div class="xd">
      <div class="xdcl">
        <i class="el-icon-paperclip" @click="look">向导</i>
      </div>
      <div :class="dis == true ? 'xdmain' : 'xdmain displayin'">
        <div class="db">
          <el-steps direction="vertical" :active="1">
            <el-step title="基本信息"></el-step>
            <el-step title="应用数据"></el-step>
            <el-step title="处理流程"></el-step>
            <el-step title="应用视图"></el-step>
            <el-step title="发布部署"></el-step>
          </el-steps>
        </div>
      </div>
    </div> -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "",
  components: {},
  directives: {},
  data() {
    return {
      changenum: "1",
      dis: false,
    };
  },
  mounted() {},
  created() {
    this.todevpent();
  },
  methods: {
    todevpent() {
      this.changenum = 1;
      this.$router.push("/fidlddata/basic");
    },
    tozjzc() {
      this.changenum = 2;
      this.$router.push("/fidlddata/fldata");
    },
    tozjgl() {
      this.changenum = 3;
      // this.$router.push('/fidlddata/flow')
      this.$router.push("/fidlddata/arrange");
    },
    tosj() {
      this.changenum = 4;
      this.$router.push("/fidlddata/vis");
    },
    tobs() {
      this.changenum = 5;
      this.$router.push("/fidlddata/appDevlopFinish");
    },
    look() {
      this.dis = !this.dis;
    },
  },
};
</script>

<style lang="less" scoped>
.backgr {
  background: #bad7ff;
}
.ui {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 90px;
  cursor: pointer;
  img {
    width: 25px;
  }
  span {
    font-size: 14px;
    margin-top: 10px;
  }
}
.el-aside {
  background: white;
  height: calc(100vh - 52px);
}
.xd {
  position: absolute;
  top: 40px;
  right: 0;
  width: 50px;
  line-height: 40px;
  color: white;
  z-index: 999999;
  .xdcl {
    background: #0084f0;
    text-align: center;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
  }
  .xdmain {
    background: white;
    border: 1px solid skyblue;
  }
  .displayin {
    display: none;
  }
}
/deep/.el-step.is-vertical {
  justify-content: center;
  flex-wrap: wrap;
}
/deep/.el-step.is-vertical .el-step__title {
  font-size: 14px;
}
</style>
