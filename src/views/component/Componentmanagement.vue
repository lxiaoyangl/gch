<template>
  <div class="cont">
    <div class="cont-main">
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- 填写基本信息 -->
        <el-collapse-item name="1">
          <template slot="title">
            <button class="btn-class">填写基本信息</button>
            <span class="collapseTitle">展开</span>
          </template>
          <div class="basic">
            <div class="dfc zjmingc">
              <span> 组件名称：</span>
              <span>
                <el-input size="small" v-model="comname"></el-input>
              </span>
            </div>
            <span class="dfc">
              组件类型：
              <el-select v-model="comtype" size="small">
                <el-option></el-option>
              </el-select>
            </span>
            <div class="dfc">
              <span>版本： </span>
              <span>
                <el-input v-model="comversions" size="small"></el-input>
              </span>
            </div>
            <div class="dfc">
              <span>组件描述：</span>
              <span>
                <el-input
                  v-model="comdescribe"
                  size="small"
                  class="wid"
                ></el-input>
              </span>
            </div>
          </div>
        </el-collapse-item>
        <!-- 填写应用场景 -->
        <el-collapse-item>
          <template slot="title">
            <button class="btn-class">填写应用场景</button>
            <span class="collapseTitle">展开</span>
          </template>
          <div class="p10">
            <div class="dfc">
              <spam>应用场景描述：</spam>
              <el-input size="small" v-model="scene" class="inpwid"></el-input>
            </div>
            <div class="df">
              <span> 上传案例：</span>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{ file }">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
            </div>
          </div>
        </el-collapse-item>
        <!-- 部署要求 -->
        <el-collapse-item name="2">
          <template slot="title">
            <button class="btn-class">部署要求</button>
            <span class="collapseTitle">展开</span>
          </template>
          <!-- 运行环境 -->
          <el-collaps>
            <el-collapse-item name="3">
              <template slot="title">
                <span>运行环境</span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span class="collapseTitle">展开</span>
              </template>
              <div class="dfc systm">
                <div class="mrnum">
                  <span>操作系统：</span>
                  <span>
                    <el-select v-model="system" size="small"> </el-select>
                  </span>
                  <span> 已选：</span>
                </div>
                <div class="dfc">
                  <div class="dfc min">
                    <span>最小磁盘：</span>
                    <span><el-input v-model="cp" size="small"></el-input></span>
                  </div>
                  <div class="dfc min">
                    <span>最小CPU：</span>
                    <span
                      ><el-input v-model="cpu" size="small"></el-input
                    ></span>
                  </div>
                  <div class="dfc min">
                    <span>最小内存：</span>
                    <span
                      ><el-input v-model="internal" size="small"></el-input
                    ></span>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collaps>
          <!-- 运行方式 -->
          <el-collaps>
            <el-collapse-item name="4">
              <template slot="title">
                <span> 运行方式 </span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span class="collapseTitle"> 展开 </span>
              </template>
              <div class="dfc waydiv">
                <div class="dfc waylist">
                  <span> 实例方式：</span>
                  <span>
                    <el-select
                      v-model="slway"
                      placeholder="单机多实例"
                      size="small"
                    >
                    </el-select>
                  </span>
                </div>
                <div class="dfc waylist">
                  <span>调用方式：</span>
                  <span>
                    <el-select
                      v-model="dyway"
                      placeholder="power job"
                      size="small"
                    ></el-select>
                  </span>
                </div>
              </div>
            </el-collapse-item>
          </el-collaps>
          <!-- 开发说明 -->
          <el-collaps>
            <el-collapse-item name="5">
              <template slot="title">
                <span> 开发说明 </span>
                <i class="el-icon-minus"></i>
                <i class="el-icon-minus"></i>
                <span class="collapseTitle"> 展开 </span>
                <el-button
                  type="primary"
                  size="small"
                  class="addbtn"
                  @click="addexplain"
                  >新增接口</el-button
                >
              </template>
              <div>
                <div v-for="(item, index) in addview" :key="index" class="interfaceItems">
                  <div class="viewbox">
                    <span class="sptitle">
                      开发说明{{ index + 1 }}
                      <el-button
                        type="primary"
                        size="small"
                        v-if="index == 0"
                        >说明</el-button>
                      <el-button
                        type="danger"
                        size="small"
                        v-if="index != 0"
                        @click="del(index)"
                        >删除</el-button>
                    </span>
                    <div class="dfc">
                      <div class="dfc jkming">
                        <span>接口名：</span>
                        <span
                          ><el-input
                            v-model="item.jkname"
                            size="small"
                          ></el-input
                        ></span>
                      </div>
                      <div class="dfc jkming">
                        <span>接口：</span>
                        <span
                          ><el-input
                            v-model="item.jk"
                            size="small"
                            style="width: 400px"
                          ></el-input
                        ></span>
                      </div>
                    </div>
                    <div class="dfc">
                      <span> 接口说明：</span>
                      <span style="flex: 1">
                        <el-input
                          v-model="item.jksm"
                          size="small"
                          style="width: 100%"
                        ></el-input>
                      </span>
                    </div>
                    <div class="dfi">
                      <span> 接口参数：</span>
                      <el-table :data="item.jkcs" style="width: 100%">
                        <el-table-column prop="id" label="参数索引" width="100">
                        </el-table-column>
                        <el-table-column prop="name" label="参数名" width="110">
                        </el-table-column>
                        <el-table-column prop="data" label="变量名" width="110">
                        </el-table-column>
                        <el-table-column prop="type" label="类型" width="110">
                        </el-table-column>
                        <el-table-column prop="sm" label="说明">
                        </el-table-column>
                        <el-table-column label="操作" width="110">
                          <template slot-scope="scope">
                            <i style="cursor: pointer;" class="el-icon-remove" @click="InterParamsRemove(index, scope.$index)"></i>
                            <i style="margin-left:10px;cursor: pointer;" class="el-icon-circle-plus-outline" @click="InterParamsAdd(index)"></i>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collaps>
        </el-collapse-item>
        <!-- 组件上传 -->
        <el-collapse-item>
          <template slot="title">
            <button class="btn-class">组件上传</button>
            <span class="collapseTitle">展开</span>
          </template>
          <div class="files">
            <span>文件上传：</span>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
            </el-upload>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="cont-bottom">
      <el-button type="primary" size="small"><i class="el-icon-s-promotion"></i> 保存 </el-button>
      <el-button type="success" size="small"><i class="delete el-icon-document-copy"></i> 保存草稿</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  directives: {},

  data() {
    return {
      activeNames: ["1","2","3","4","5"],
      comname: "",
      comversions: "20321342",
      comdescribe: "组件描述",
      scene: "应用场景描述",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      system: "",
      internal: "",
      cpu: "",
      cp: "",
      slway: "",
      dyway: "",
      addview: [
        {
          jkname: "用户信息接口",
          jk: "com.sinux.user.manager.Userinfo",
          jksm: "接口说明",
          jkcs: [
            {
              id: 1,
              name: "参数现名称",
              data: "userName",
              type: "字符串",
              sm: "一段很长的参数说明一段很长的参数说明一般很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明",
            },
            {
              id: 2,
              name: "参数现名称",
              data: "userName",
              type: "字符串",
              sm: "一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明",
            },
          ],
        },
      ],
    };
  },

  mounted() {},

  methods: {
    handleChange(val) {
      console.log(val);
    },
    del(num) {
      this.addview.splice(num, 1);
    },

    addexplain() {
      let obj = this.addview[0];
      this.addview.push(obj);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    InterParamsRemove(index, paramIndex){
      this.addview[index].jkcs.splice(paramIndex, 1);
    },
    InterParamsAdd(index){
      this.addview[index].jkcs.push({
        id: 2,
        name: "参数现名称",
        data: "userName",
        type: "字符串",
        sm: "一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明一段很长的参数说明",
      })
    }
  },
};
</script>

<style lang="less" scoped>
.zjmingc {
  padding: 0 15px;
}
.dfi {
  display: flex;
  margin-top: 15px;
}
.mrnum {
  margin-right: 150px;
}
.inpwid {
  width: 1340px;
}
.df {
  display: flex;
  margin-top: 10px;
  margin-left: 25px;
}
.cont {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .cont-bottom {
    background: white;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
  .cont-main {
    margin: 15px 15px 0 15px;
    background: white;
    height: calc(100vh - 120px);
    padding: 15px;
    overflow: scroll;
    /deep/.el-collapse-item__arrow{
      margin: 0 8px 0 8px;
    }
    .collapseTitle{
      margin-left: 10px;
    }
    .interfaceItems{
      margin-top: 30px;
    }
  }
  .basic {
    display: flex;
    align-items: center;
    .dfc {
      margin-right: 30px;
    }
  }
  .files {
    padding: 0 15px;
    display: flex;
  }
  .addbtn {
    margin-left: 10px;
  }
  .waydiv {
    padding: 0 15px;
  }
  .waylist {
    margin-right: 20px;
  }
  .systm {
    padding: 0 15px;
  }
  .min {
    margin-right: 30px;
  }
  .btn-class {
    background: #267ff6;
    border: none;
    color: white;
    border-radius: 15px;
    line-height: 30px;
    height: 30px;
    width: 100px;
  }
  .wid {
    width: 500px;
  }
  .viewbox {
    width: 100%;
    border: 1px solid #dcdcdc;
    position: relative;
    padding: 30px 10px 10px 10px;
    // margin-bottom: 15px;
    .sptitle {
      position: absolute;
      top: -12px;
      background: white;
      left: 10px;
    }
    .jkming {
      margin-right: 50px;
      padding-left: 12px;
      margin-bottom: 15px;
    }
  }
}
</style>
