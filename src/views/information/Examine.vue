<template>
  <div class="cont">
    <div class="cont-main">
      <div class="top">
        <div>
          <span class="mr10">开发日志</span>
          <el-button type="danger" size="small">删除</el-button>
        </div>
        <div class="dfc">
          <span> <el-select placeholder="全部状态" size="small" style="width: 100px" class="mr10"></el-select></span>
          <span><el-select placeholder="全部信息类型" size="small" style="width: 100px" class="mr10"></el-select></span>
          <span class="mr10">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              style="width: 300px"
            >
            </el-date-picker>
          </span>
          <span
            ><el-input
              suffix-icon="el-icon-search"
              size="small"
              v-model="topinput"
              placeholder="搜索组件/应用名称"
            ></el-input
          ></span>
        </div>
      </div>
      <Table
        :tableHeader="tableHeader"
        :tableData="tableData"
        columnType="selection"
        height="calc(100vh - 180px)"
        :pg-total-num="1000"
      >
        <div slot="operation" slot-scope="row">
          <el-tooltip class="item" effect="dark" content="删除" placement="bottom">
            <i class="el-icon-delete op" @click=""></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="下载" placement="bottom">
            <i class="el-icon-download op"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="查看详情" placement="bottom">
            <i class="el-icon-tickets op"></i>
          </el-tooltip>
        </div>
      </Table>
      <el-dialog
        title="信息详情"
        :close-on-click-modal="false"
        :close-on-press-escape="true"
        :visible.sync="zjxxDialogVisible"
        center
        width="25%"
        :before-close="handleClose"
      >
        <div class="title">
          <div class="toptitle">
            <i class="el-icon-minus"></i>
            <i class="el-icon-minus"></i>
            <span>组件审批</span>
            <i class="el-icon-minus"></i>
            <i class="el-icon-minus"></i>
          </div>
          <div class="titmain">
            <div class="mb10">
              <i></i>
              <span>{{ rows.mc }}</span>
            </div>
            <div class="mb10">
              <span>申请时间: </span>
              <span>{{ rows.sqsj }}</span>
            </div>
            <div class="mb10">
              <span>申请状态: </span>
              <span>{{ rows.zt }}</span>
            </div>
            <div class="mb10">
              <span>审批人: </span>
              <span>{{ rows.spr }}</span>
            </div>
            <div class="mb10">
              <span>审批时间: </span>
              <span>{{ rows.spsj }}</span>
            </div>
          </div>
          <div class="btn">
            <el-button size="small" type="primary">确定</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table";
export default {
  name: "",
  components: { Table },
  directives: {},
  data() {
    return {
      topinput: "",
      value1: "",
      tableHeader: [
        {
          prop: "id",
          name: "序号",
          width: 50,
        },
        {
          prop: "mc",
          name: "名称",
        },
        {
          prop: "type",
          name: "消息类型",
          width: 180,
        },
        {
          prop: "zt",
          name: "状态",
        },
        {
          prop: "spr",
          name: "审批人",
        },
        {
          prop: "sqsj",
          name: "消息时间",
          button: true,
        },
        {
          prop: "spsj",
          name: "审批时间",
        },
      ],
      tableData: [
        {
          id: "1",
          mc: "组件名称[组件类型]",
          type: "组件审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "待审批",
          spr: "",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "2",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "3",
          mc: "组件名称[组件类型]",
          type: "资源组申请",
          sqsj: "2021-03-12 13:12:12",
          zt: "待审批",
          spr: "",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "4",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "5",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "6",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "7",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "8",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "9",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "10",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "11",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "12",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "13",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "14",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "15",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "16",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
        {
          id: "17",
          mc: "组件名称[组件类型]",
          type: "应用审批",
          sqsj: "2021-03-12 13:12:12",
          zt: "已上架",
          spr: "杨主管",
          spsj: "2021-03-12 13:12:12",
          isHover: false,
        },
      ],
      zjxxDialogVisible: true,
      multipleSelection: [],
      rows: "",
    };
  },

  mounted() {},

  methods: {
    handleDetail(data) {
      this.zjxxDialogVisible = true;
      this.rows = data;
      console.log(this.rows);
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  background: #f5f6fa;
}
.titmain {
  margin: 0 15px;
  background: white;
  padding: 35px 60px;
  height: 350px;
}
.toptitle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.cont {
  width: 100%;
  position: relative;
  .mask {
    background: skyblue;
    width: 100%;
    position: absolute;
  }
  .cont-main {
    margin: 15px;
    background: white;
    height: calc(100vh - 100px);
    .top {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      padding: 0 15px;
    }
    .op {
      cursor: pointer;
    }
    .op:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
