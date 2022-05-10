<template>
  <div class="cont">
    <div class="main">
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- 数据存储 -->
        <el-collapse-item name="1">
          <template slot="title">
            <button class="btn-class">数据存储</button>
            <span>展开</span>
          </template>
          <div class="back">
            <div class="dfc zjmingc">
              <span class="mr10"> 存储路径 : </span>
              <span>
                <el-input
                  size="small"
                  v-model="cclj"
                  style="width: 700px; margin-right: 15px"
                ></el-input>
              </span>
              <el-button type="primary" size="small">选择路径</el-button>
            </div>
            <div class="back-b dfc mt10">
              <div>
                <span class="mr10">分表存储 :</span>
                <span>
                  <el-select
                    placeholder="按时间、存量、字段"
                    v-model="zero"
                    size="small"
                    style="width: 200px"
                  ></el-select>
                </span>
              </div>
              <div class="ml20">
                <span>分表存储 :</span>
                <span>
                  <el-select
                    placeholder="选择分库存储方式"
                    v-model="fs"
                    size="small"
                    style="width: 200px"
                  ></el-select>
                </span>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <!-- 数据配置 -->
        <el-collapse-item name="2">
          <template slot="title">
            <button class="btn-class">部署要求</button>
            <span>展开</span>
          </template>
          <!-- 应用场景-->
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <span>应用场景</span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span>展开</span>
              </template>
              <div class="xz">
                <div class="dfc">
                  <el-checkbox label="目标" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                      disabled
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="轨迹" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="通联" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="GIS地图" class="mar"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- 业务数据 -->
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <span> 业务数据 </span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span> 展开 </span>
              </template>
              <div class="xz">
                <div class="dfc">
                  <el-checkbox label="目标" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                      disabled
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="轨迹" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="通联" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="GIS地图" class="mar"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- 过程数据 -->
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <span> 过程数据 </span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span> 展开 </span>
              </template>
              <div class="xz">
                <div class="dfc">
                  <el-checkbox label="目标" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                      disabled
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="轨迹" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="通联" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="GIS地图" class="mar"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- 成果数据 -->
          <el-collapse>
            <el-collapse-item name="3">
              <template slot="title">
                <span> 成果数据 </span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span> 展开 </span>
              </template>
              <div class="xz">
                <div class="dfc">
                  <el-checkbox label="目标" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                      disabled
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="轨迹" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="通联" class="marz"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="dfc">
                  <el-checkbox label="GIS地图" class="mar"></el-checkbox>
                  <div class="dfc">
                    <el-checkbox
                      :indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                      >全选</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                      v-model="checkedCities"
                      @change="handleCheckedCitiesChange"
                    >
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        >{{ city }}</el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="cont-bottom">
      <el-button type="primary" size="small" @click="next"> 下一步</el-button>
      <el-button type="info" size="small" @click="up">上一步</el-button>
      <el-button type="success" size="small"
        ><i class="delete el-icon-document-copy"></i> 保存草稿</el-button
      >
    </div>
  </div>
</template>

<script>
const cityOptions = ["类型", "状态", "轨迹", "通联", "经纬度"];
export default {
  name: "",

  components: {},

  directives: {},

  data() {
    return {
      activeNames: ["1", "2", "3"],
      cclj: "选择存储路径",
      zero: "",
      fs: "",
      checkAll: false,
      checkedCities: ["状态", "轨迹"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },

  mounted() {},

  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    up() {
      this.$router.push("/fidlddata/basic");
    },
    next() {
      this.$router.push("/fidlddata/flow");
    },
  },
};
</script>

<style lang="less" scoped>
.marz {
  margin-right: 74px;
}
.mar {
  margin-right: 50px;
}
.cont {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cont-bottom {
    background: white;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
}
.main {
  margin: 0 15px;
  padding: 20px;
  height: calc(100vh - 100px);
  background: white;
  overflow-y: auto;
  .back {
    padding: 0 15px;
  }
  .xz {
    padding: 0 15px;
  }
}
.btn-class {
  background: #267ff6;
  border: none;
  color: white;
  border-radius: 15px;
  line-height: 30px;
  height: 30px;
  width: 100px;
  margin-right: 10px;
}
/deep/.el-collapse-item__arrow {
  margin: 0 8px 0 8px;
}
</style>