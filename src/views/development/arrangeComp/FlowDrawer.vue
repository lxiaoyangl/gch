<template>
  <el-drawer
    :with-header="false"
    :modal="false"
    :show-close="false"
    size="100%"
    :modal-append-to-body="false"
    :destroy-on-close="true"
    :visible.sync="flowDrawer"
    direction="rtl"
    custom-class="drawer"
  >
    <div class="cont-deploy">
      <div class="right">
        <div class="title">{{ flowDrawerData.name }}</div>
      </div>
      <div class="r-main">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <el-button round type="primary" size="small"
                >流程缩略图</el-button
              >
            </template>
            <div id="containers" style="height: 200px"></div>
            <!-- <div id="container" style="display: none"></div> -->
            <!-- <div id="miniMap" style="height: 200px"></div> -->
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <el-button round type="primary" size="small">基本信息</el-button>
            </template>
            <el-form :model="formData" ref="depForm" label-width="100px">
              <el-form-item label="流程组件名称：">
                <div>{{ flowDrawerData.name }}</div>
              </el-form-item>
              <el-form-item label="组件数：">
                <div>
                  {{ compNum.length }}
                </div>
              </el-form-item>
              <el-form-item label="内部组件名称：">
                <div>
                  {{ compNum.map((item) => item.data.name) }}
                </div>
              </el-form-item>
              <el-form-item label="创建时间：">
                <div>{{ formData.creatTime }}</div>
              </el-form-item>
              <el-form-item label="流程组件描述：">
                <div>
                  {{ formData.desc }}
                </div>
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse>
        <div class="r-bottom">
          <el-button
            type="primary"
            @click="$emit('handleUpdate', flowDrawerData)"
            >修改组件</el-button
          >
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { Graph, Edges, Shape, Addon, NodeView } from "@antv/x6";
export default {
  props: ["flowDrawer", "flowDrawerData"],
  data() {
    return {
      activeNames: ["1", "2"],
      childrenActiveNames: ["11", "12", "13"],
      formData: {},
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 100);
  },
  methods: {
    init() {
      console.log(this.flowDrawerData.datas.comp);
      const containerRef = document.getElementById("containers");
      const miniMapContainerRef = document.getElementById("miniMap");
      let graph = new Graph({
        container: containerRef,
        width: 520,
        height: 200,
        // autoResize: true, //自动画布大小
        // resizing: true,
        panning: true, //支持平移拖拽
        grid: {
          // size: 20, // 网格大小 10px
          visible: false, // 渲染网格背景
          // type: "mesh",
          // args: {
          //   color: "#D0D0D0",
          //   thickness: 1, // 网格线宽度/网格点大小
          //   factor: 4,
          // },
        },
        background: {
          color: "#F5F6FA",
        },
        // minimap: {
        //   enabled: true,
        //   container: miniMapContainerRef,
        //   width: 520,
        //   height: 200,
        //   scalable: false,
        // },
      });
      graph.centerContent(); //画布居中
      graph.fromJSON(this.flowDrawerData.datas.comp);
    },
  },
  watch: {
    flowDrawerData: {
      handler(val) {
        this.formData = val.datas;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    compNum() {
      let comp = this.formData.comp.filter((item) => item.position);
      return comp;
    },
  },
};
</script>
<style lang="less" scoped>
.drawer {
  .cont-deploy {
    .title {
      background: #4d5c71;
      color: white;
      height: 35px;
      line-height: 35px;
      padding-left: 20px;
    }
    .r-main {
      // padding: 15px;
      height: calc(100%);
      overflow-y: auto;
      position: relative;
      background: #fff;
      /deep/.el-collapse-item__header {
        padding-left: 20px;
      }
      /deep/.el-collapse-item__arrow {
        margin-left: 30px;
      }
      .r-bottom {
        // position: fixed;
        text-align: center;
        margin: 10px 0;
        // bottom: 60px;
        // right: 200px;
      }
      .el-collapse-item-content {
        padding: 0px 20px;
      }
    }
  }
}
// /deep/.el-form-item__content {
//   line-height: 20px;
// }

.el-drawer__wrapper {
  right: 0;
  left: auto;
  width: 40%;
  position: absolute;
}
</style>
