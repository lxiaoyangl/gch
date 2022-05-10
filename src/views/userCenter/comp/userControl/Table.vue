<template>
  <div class="table">
    <el-table
      :data="tableData"
      @cell-mouse-enter="enter"
      @cell-mouse-leave="leave"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{ prop: 'date' }"
      height="calc(100vh - 210px)"
    >
      <el-table-column show-overflow-tooltip type="selection" width="50">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="targetID" label="目标ID">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="date"
        sortable
        label="通联时间"
      ></el-table-column>
      <el-table-column show-overflow-tooltip prop="IP" label="IP地址">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="port" label="端口号">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="protocol" label="协议">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="flow" label="流量">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="status" label="还原状态">
        <template slot-scope="{ row }">
          <div :class="row.status == '失败' ? 'cff4' : ''">
            {{ row.status }}
          </div>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="address" label="储存地址">
      </el-table-column>
      <el-table-column show-overflow-tooltip label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button
            @click="btndetail(row)"
            :type="row.isHover ? 'primary' : 'text'"
            size="mini"
            >详情</el-button
          >
          <el-button
            size="mini"
            :type="row.isHover ? 'danger' : 'text'"
            @click="btndelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableData"],
  data() {
    return {
      show: false,
      //多选
      multipleSelection: [],
    };
  },
  methods: {
    // 鼠标操作
    enter(row) {
      row.isHover = true;
    },
    leave(row) {
      row.isHover = false;
    },
    //静态筛选
    formatter(row, column) {
      return row.date;
    },
    //多选
    handleSelectionChange(val) {
      console.log(this.czselectData);
      this.$emit("handleAllDate", val);
    },
    btndetail(row) {
      this.$emit("handleOnEdit", row);
    },
    btndelete(row) {
      this.$emit("handleDelete", row);
    },
  },
};
</script>

<style lang="less" scoped>
</style>