<template>
  <div class="email-page">
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      :span-method="arraySpanMethod"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
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
  }},
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (row.children) {
        if (columnIndex === 0) {
          return [1, 3];
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