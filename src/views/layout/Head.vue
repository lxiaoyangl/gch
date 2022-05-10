<template>
  <div class="head">
    <div class="title">国产化信号处理平台</div>
    <div class="center">
      <el-menu
        :router="true"
        :default-active="activeIndex"
        class="title-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item, i) in routeList"
          :key="i"
          :index="item.path"
        >
          <span style="display: flex; align-items: center">
            <i :class="dynamicClass(item)"></i>{{ item.name }}
          </span>
          <!-- 
          <router-link :to="item.path">{{ item.name }}</router-link> -->
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <div class="msg">
        <el-badge :value="12" :max="99" class="item">
          <i class="el-icon-message"></i>
        </el-badge>
      </div>
      <div class="user" @click="logout">
        <div class="avat">
          <i class="el-icon-user-solid"></i>
        </div>
        <span>管理员xxx</span>
      </div>
    </div>
  </div>
</template>

<script>
import { LocalStorage } from "@antv/x6";
export default {
  data() {
    return {
      activeIndex: null,
      routeList: [],
      errData: [
        {
          name: "名称",
          msg: "异常信息ssssssssssssssssssssssssssssssssssssssssssssss...",
          time: "11-20",
          lv: "lv1",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv1",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv1",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv1",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
        {
          name: "名称",
          msg: "异常信息...",
          time: "11-20",
          lv: "lv2",
        },
      ],
      routes: {
        1: [
          {
            path: "/applicationDev/home",
            name: "首页",
            image: "el-icon-s-home",
          },
          {
            path: "/componentFactory/compoenttemplate",
            name: "组件开发",
            image: "el-icon-s-ticket",
          },
          {
            path: "/componentFactory/component",
            name: "组件仓库",
            image: "el-icon-s-shop",
          },
          { path: "/fidlddata", name: "应用开发", image: "el-icon-s-grid" },
          {
            path: "/application/management",
            name: "应用管理",
            image: "el-icon-c-scale-to-original",
          },
          { path: "/inforManager", name: "日志管理", image: "el-icon-reading" },
        ],
        2: [
          {
            path: "/applicationHome/home",
            name: "首页",
            image: "el-icon-s-home",
          },
          {
            path: "/applicationUser/management",
            name: "应用中心",
            image: "el-icon-s-grid",
          },
          { path: "/resource", name: "资源管理", image: "el-icon-cpu" },
          {
            path: "/applicationUser/dataManager",
            name: "数据管理",
            image: "el-icon-s-data",
          },
          {
            path: "/applicationUser/process",
            name: "实列管理",
            image: "el-icon-document-copy",
          },
          {
            path: "/userCenter",
            name: "用户管理",
            image: "el-icon-user-solid",
          },
          { path: "/inforManager", name: "信息管理", image: "el-icon-reading" },
        ],
      },
    };
  },
  methods: {
    handleSelect(key) {
      localStorage.setItem("activeNav", key);
    },
    logout() {
      this.$router.push("/");
    },
    dynamicClass(item) {
      let clazz = {};
      clazz[item.image] = true;
      return clazz;
    },
  },
  created() {
    this.routeList = this.routes[sessionStorage.getItem("user")];
    this.$router.push(this.routeList[0].path);
  },
  mounted() {
    this.activeIndex = this.$route.path;
  },
};
</script>

<style lang="less">
.head {
  background-color: #252e3f;
  border: 1px solid #686e78;
  border-bottom: none;
  flex: 0 0 50px;
  color: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 1px;
  }
  .right {
    height: 100%;
    display: flex;
    align-items: center;

    .msg {
      font-size: 24px;
      margin: 0 20px;
      margin-right: 30px;
      .el-badge__content {
        border: none;
      }
    }
    .user {
      display: flex;
      align-items: center;
      cursor: pointer;
      .avat {
        font-size: 24px;
        height: 25px;
        width: 25px;
        background-color: #4079fa;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 8px;
      }
    }
  }
}
</style>
<style lang="less">
.title-menu {
  border: none !important;
  background-color: transparent;
  .el-menu-item {
    height: 50px;
    line-height: 50px;
    border: none;
    &.is-active,
    &:hover {
      border: none;
      background-color: #32405a !important;
      color: #fff !important;
    }
    // a {
    //   //display: flex;
    //   align-items: center;
    //   width: 100%;
    //   height: 100%;

    //   text-decoration: none;
    //   color: #bac0c3;
    // }
  }
  .el-menu-item.is-active {
    i {
      color: #00aeff;
    }
  }
  .el-submenu {
    &.is-active {
      background-color: #32405a;
      border: none;
      .el-submenu__title {
        color: #fff !important;
      }
    }
    .el-submenu__title {
      height: 50px;
      line-height: 50px;
      border: none !important;
      color: #bac0c3;
      &:hover {
        background-color: #32405a;
        color: #fff;
      }
    }
  }
}
.el-menu--popup {
  min-width: 100px;
}
.title-submenu {
  text-align: center;
  &:hover,
  &.is-active {
    background-color: #32405a !important;
    a {
      color: #fff;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
  }
}
// .el-dropdown-menu {
//   box-shadow: 0px 0px 4px #c8cdd3;
//   .el-dropdown-menu__item {
//     // background-color: #252e3f;
//     &:hover {
//       background-color: #252e3f !important;
//       a {
//         color: #fff;
//       }
//     }
//     a {
//       text-decoration: none;
//       color: #000;
//       &.on {
//         // background-color: #252e3f;
//         color: #1892ff;
//       }
//     }
//   }
// }
</style>
