<template>
  <div class="email-page">
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      :span-method="arraySpanMethod"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column width="80" align="center">
        <template slot="header" slot-scope="scope">
          <el-checkbox v-model="tableSelectAll" :indeterminate="halfSelectAll" @change="(val) => selectAllChange(val, scope)"/>
        </template>
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.select" v-if="!scope.row.children" @change="(val) => selectSingleChange(val, scope)"/>
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableSelectAll: false,
      halfSelectAll: false,
      tableData: [
        {
          id: 3,
          name: '今天两封',
          content: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1519 弄'
          }]
        },
        {
          id: 4,
          name: '本周两封',
          content: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 41,
            date: '2016-05-01',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 42,
            date: '2016-05-01',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1519 弄'
          }]
        },
      ]
    }
  },
  computed: {
    childrenList() {
      return this.tableData.map(a => a.children).flat(2);
    },
  },
  methods: {
    /** 全选变更 */
    selectAllChange(val) {
      this.childrenList.forEach(item => {
        this.$set(item, 'select', val);
      })
    },
    /** 单个选择变更 */
    selectSingleChange(val, scope) {
      console.log(scope);
      const length = this.childrenList.filter(item => item.select).length;
      this.tableSelectAll = length === this.childrenList.length ? true : false;
      this.halfSelectAll = length !== 0 && !this.tableSelectAll ? true : false;
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (row.children) {
        if (columnIndex === 1) {
          return [1, 4];
        } else if (columnIndex === 0) {
          return [1, 1];
        } else {
          return [0, 0]
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.email-page {
  min-height: 900px;
}
</style>