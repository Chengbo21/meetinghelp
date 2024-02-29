<template>
  <div class="">
    <!-- 搜索框 -->
    <div class="search">
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="showUserList()">
          查询
        </el-button>
        <el-button type="primary" @click="dialogFormVisible = true">
          新增用户
        </el-button>
        <!-- 新增用户 -->
        <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="400px">
          <el-form :model="addform">
            <el-form-item label="用户名">
              <el-input v-model="addform.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="addform.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="addform.address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="addform.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser()">确 定</el-button>
          </div>
        </el-dialog>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData.list" border style="width: 100%">
      <el-table-column align="center" prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="age" label="年龄" width="180">
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column align="center" prop="phone" label="联系方式">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteid(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页条 -->
    <div class="fenye">
      <el-pagination background layout="prev, pager, next" :pageSize="tableData.pageSize" :current-page="tableData.pageNum"
      :total="tableData.total"
        @current-change="changePageNum">
      </el-pagination>
    </div>
    <!-- 删除之前的提示信息 -->
    <el-dialog title="提示" :visible.sync="deleteVisiable" width="30%">
      <span>确定要删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisiable = false">取 消</el-button>
        <el-button type="primary" @click="deleteUser()">确 定</el-button>
      </span>
    </el-dialog>



  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      form: {
        name: ""
      },
      pageNum: '',
      pageSize: 5,
      currentPage: '',
      tableData: [],
      addform: {
        name: "",
        password: "",
        age: "",
        address: "",
        phone: ""
      },
      id: -1,
      // 默认弹窗不出现
      dialogFormVisible: false,//新增
      deleteVisiable: false//删除
    }
  },
  created() {
    this.showUserList();
  },
  mounted() {
  },
  watch: {},
  computed: {},
  methods: {
    // 获取每一列的ID值
    deleteid(ids) {
      this.id = ids;
      this.deleteVisiable = true;//打开删除弹框
    },
    deleteUser() {
      axios.get("http://localhost:8090/deleteUser", {
        params: {
          id: this.id
        }
      })
        .then(result => {
          // console.log(result);
          if (result.data.code == 400) {
            this.$message({
              message: result.data.msg,
              type: 'success'
            });
          }
          this.deleteVisiable = false;
          // 刷新
          this.showUserList();
        })
    },
    searchName() {
      this.showUserList();
    },
    // 点击每页。获取对应页面内容
    changePageNum(val) {
      // alert(val);
      this.currentPage = val;
      this.showUserList();
    },
    //通过·姓名查询查询信息
    showUserList() {
      axios
        .get("http://localhost:8090/showList", {
          params: {
            name: this.form.name,
            pageNum: this.currentpage
          }
        })
        .then(result => {
          console.log(result)
          var tmp = result.data.data;
          this.tableData = tmp;
        });
    },
    // 新增用户
    addUser() {
      var params = new URLSearchParams();
      params.append("name", this.addform.name);
      params.append("password", "123456");
      params.append("age", this.addform.age);
      params.append("address", this.addform.address);
      params.append("phone", this.addform.phone);
      axios
        .post("http://localhost:8090/addUser", params)
        .then(result => {
          // console.log(result);
          if (result.data.code == 300) {
            // 新增成功
            this.$message({
              message: result.data.msg,
              type: 'success'
            });
            // 刷新
            this.showUserList();
          }
          // 弹窗消失
          this.dialogFormVisible = false;
        }).catch(err => {

        });
    }
  },
}
</script>
<style  scoped>
.search {
  width: 100%;
  height: 60px;
  margin: 0px;
  /* background-color: antiquewhite; */
}

.fenye {
  text-align: center;
  margin-top: 20px;
}
</style>