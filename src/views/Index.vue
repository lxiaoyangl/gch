<template>
  <div class="index">
    <el-container>
      <el-header>
        <Head />
      </el-header>
      <el-main>
        <Main />
      </el-main>
      <!-- <el-container>
        <el-aside width="200px" class="slassAside">
          <el-menu :collapse="false">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <template #title>组件管理</template>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <template #title>开发模板</template>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>组件注册</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </el-container> -->
    </el-container>
  </div>
</template>

<script>
import Head from "./layout/Head.vue";
import Main from "./layout/Main.vue";
export default {
  components: {
    Main,
    Head,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.index {
  background: url(../assets/img/content-bg.png) 0px 0px no-repeat;
  // background: #e9ecf1;
  overflow: hidden;
  background-size: 100% 100%;
  // user-select: none;
  font-size: 14px;
  height: 100%;
  // width: 100%;
  display: flex;
  flex-direction: column;
  .el-container {
    // height: 100%;
    /deep/.el-header {
      padding: 0px;
      height: auto !important;
    }
    /deep/.slassAside {
      background: #fff;
    }
    /deep/.el-main {
      // height: 100%;
      padding: 0px;
    }
  }
}
</style>
