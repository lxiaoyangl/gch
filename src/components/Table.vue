<template>
  <div class="mainTable">
    <el-table :data="tableData" @cell-mouse-enter="cellMouseEnter" @cell-mouse-leave="cellMouseLeave" style="width: 100%" :height="height">
      <el-table-column v-if="columnType != 'none'"
          :type="columnType"
          width="55">
      </el-table-column>
      <el-table-column v-for="(item, index) in tableHeader" :key="index"
          :prop="item.prop"
          :label="item.name"
          :sortable="item.sortable?item.sortable:false"
          :width="parseString(item.width)">
        <template slot-scope="{row}">
          <span :class="{show:row.isHover,hidden:!row.isHover}">
            <slot v-if="item.button" name="operation" :data="row"></slot>
          </span>
          <span :class="{show:!row.isHover,hidden:row.isHover&&item.button}" v-html="item.formatter?item.formatter(row,item.prop,row[item.prop],index):row[item.prop]"></span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="pgVisible" :layout="pgType"
                   :page-sizes="pgSize"
                   :current-page="1"
                   :total="pgTotalNum"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: {
      tableHeader: {
        type: Array,
        default: ()=>[]
      },
      tableData: {
        type: Array,
        default: ()=>[]
      },
      //selection（多选）/index（索引）/expand(扩展按钮)/none(单选)
      columnType: {
        type: String,
        default: 'selection'
      },
      height: {
        type: String,
        default: '500'
      },
      pgVisible: {
        type: Boolean,
        default: true
      },
      pgType: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      pgTotalNum: {
        type: Number,
        default: 0
      },
      pgSize: {
        type: Array,
        default: ()=>[10, 20, 30, 40]
      }
    },
    data() {
      return {

      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      /**
       * 将参数val转换魏字符串
       * @param val
       * @returns {string}
       */
      parseString(val){
        if (val){
          return String(val);
        }else {
          return '';
        }
      },
      /**
       * table表格行鼠标移入事件
       * @param row
       * @param column
       * @param cell
       * @param event
       */
      cellMouseEnter(row, column, cell, event){
        row.isHover = true;
      },
      /**
       * table表格行鼠标移出事件
       * @param row
       * @param column
       * @param cell
       * @param event
       */
      cellMouseLeave(row, column, cell, event){
        row.isHover = false;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.$emit('handleSizeChange', val);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$emit('handleCurrentChange', val);
      },
    }
  }
</script>
<style lang="less" scoped>
.mainTable {
  .el-table{
    position: relative;
    /deep/th{
      padding: 4px 0 !important;
      background-color: #4e5c72 !important;
    }
  }

  .el-pagination {
    position: relative;
    background-color: #FFFFFF;
    white-space: nowrap;
    padding: 10px 10px;
    color: #303133;
    font-weight: 700;
  }

  .show {
    display: inline;
  }

  .hidden {
    display: none;
  }
}
</style>
