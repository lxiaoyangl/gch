<template>
  <div class="line-comp">
    <div class="r-title">
      {{ dataLineDatas.title }}
      <el-button
        size="mini"
        type="primary"
        plain
        @click="handleAddItem('enmp')"
      >
        <i class="el-icon-circle-plus-outline"></i>
        添加
      </el-button>
      <!-- <el-button size="mini" type="danger" plain>
        <i class="el-icon-delete"></i>
        删除
      </el-button> -->
    </div>
    <template v-if="dataMappingList.length > 0">
      <div v-for="(enmp, i) in dataMappingList" :key="i" class="enmp">
        <el-descriptions class="margin-top" :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 映射名称 </template>
            <el-select v-model="dataLineDatas.name" size="mini">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 传输方式 </template>
            <el-select v-model="dataLineDatas.type" size="mini">
              <el-option label="CAN总线" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-descriptions-item>
          <el-descriptions-item
            :labelStyle="{
              'background-color': '#E4F2FF',
              color: '#3F88F7',
            }"
          >
            <template slot="label">
              <i class="el-icon-upload2"></i>
              输 出
            </template>
            <el-select v-model="dataLineDatas.out" size="mini">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-descriptions-item>
          <el-descriptions-item
            :labelStyle="{
              'background-color': '#DBF9F9',
              color: '#57D2D7',
            }"
          >
            <template slot="label">
              <i class="el-icon-download"></i>
              输 入
            </template>
            <el-select v-model="dataLineDatas.in" size="mini">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-descriptions-item>
        </el-descriptions>
        <el-form size="small">
          <el-form-item class="comp">
            <el-form-item
              v-for="(intf, ii) in enmp.children"
              :key="i + ii"
              :label="intf.interfaceName"
              style="background-color: #e5e8ef; margin: 10px"
            >
              <div class="intf cont">
                <el-select
                  v-model="intf.interfaceOut"
                  placeholder="输出接口选择"
                >
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
                <el-select
                  v-model="intf.interfaceIn"
                  placeholder="输入接口选择"
                >
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
                <div class="f-after">
                  <el-link type="primary" :underline="false">
                    <i
                      class="el-icon-circle-plus-outline"
                      @click="handleAddItem('intf', enmp)"
                    ></i>
                  </el-link>
                  <el-link type="danger" :underline="false">
                    <i
                      class="el-icon-remove-outline"
                      @click="handleDelItem('intf', enmp)"
                    ></i>
                  </el-link>
                </div>
              </div>

              <el-form-item
                v-for="(arg, ai) in intf.children"
                :key="i + ii + ai"
                :label="arg.argumentName"
              >
                <div class="arg cont">
                  <el-select
                    v-model="arg.argumentOut"
                    placeholder="输出参数设置"
                  >
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                  <el-select
                    v-model="arg.argumentIn"
                    placeholder="输入参数设置"
                  >
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                  <div class="f-after">
                    <el-link type="primary" :underline="false">
                      <i
                        class="el-icon-circle-plus-outline"
                        @click="handleAddItem('arg', intf)"
                      ></i>
                    </el-link>
                    <el-link type="danger" :underline="false">
                      <i
                        class="el-icon-remove-outline"
                        @click="handleDelItem('arg', intf)"
                      ></i>
                    </el-link>
                  </div>
                </div>
              </el-form-item>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <el-empty v-else description="暂无数据映射"></el-empty>
  </div>
</template>

<script>
export default {
  props: ["dataLineDatas"],
  data() {
    return {
      dataMappingList: [
        {
          compName: "组件1",
          id: 0,
          compIn: "",
          compOut: "",
          children: [
            {
              interfaceName: "接口1",
              interfaceIn: "",
              interfaceOut: "",
              children: [
                {
                  argumentName: "参数1",
                  argumentIn: "",
                  argumentOut: "",
                },
                // {
                //   argumentName: "参数2",
                //   argumentIn: "",
                //   argumentOut: "",
                // },
              ],
            },
            // {
            //   interfaceName: "接口2",
            //   interfaceIn: "",
            //   interfaceOut: "",
            //   children: [
            //     {
            //       argumentName: "参数1",
            //       argumentIn: "",
            //       argumentOut: "",
            //     },
            //   ],
            // },
          ],
        },
      ],
    };
  },
  methods: {
    handleAddItem(type, item) {
      let arg = {
        argumentName: "参数1",
        argumentIn: "",
        argumentOut: "",
      };
      let intf = {
        interfaceName: "接口2",
        interfaceIn: "",
        interfaceOut: "",
        children: [
          {
            argumentName: "参数1",
            argumentIn: "",
            argumentOut: "",
          },
        ],
      };
      let enmp = {
        // id: ++this.dataMappingList.length,
        id: 1,
        compIn: "",
        compOut: "",
        children: [
          {
            interfaceName: "接口1",
            interfaceIn: "",
            interfaceOut: "",
            children: [
              {
                argumentName: "参数1",
                argumentIn: "",
                argumentOut: "",
              },
            ],
          },
        ],
      };
      switch (type) {
        case "enmp":
          this.dataMappingList.push(enmp);
          break;
        case "intf":
          item.children.push(intf);
          break;
        case "arg":
          item.children.push(arg);
          break;

        default:
          break;
      }
    },
    handleDelItem(type, item) {
      
    },
  },
};
</script>

<style lang="less" scope>
.line-comp {
  .r-title {
    padding: 10px;
    padding-top: 0;
  }
  .enmp {
    margin-bottom: 10px;
  }
  .comp {
    .el-select {
      margin: 8px 0 !important;
    }
  }
  .el-form-item {
    // padding: 8px 0;
    // margin: 5px 0;
    border-radius: 2px;
    .el-form-item__label {
      padding-top: 8px;
      width: 60px;
    }
    .cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .f-after {
      width: 60px;
      // background-color: #fff;
      // align-self: flex-end;
      text-align: center;
      a {
        font-size: 18px;
        // display: none;
      }
    }
    &:hover {
      .f-after {
        a {
          display: inline-flex;
        }
      }
    }
  }
}
.el-descriptions {
  .el-descriptions-item__cell {
    padding: 0 !important;
    .el-select {
      width: 100%;
      margin: 0;
    }
  }
  .el-descriptions-item__label {
    width: 80px;
    text-align: center;
  }
}
</style>
