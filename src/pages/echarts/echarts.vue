<template>
  <div class="common_page_container">
    <div class="echars">{{tabName}}
      <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
        <el-tab-pane label="柱状图" name="bar"></el-tab-pane>
        <el-tab-pane label="折线图" name="line-type"></el-tab-pane>
        <el-tab-pane label="饼图" name="pie"></el-tab-pane>
      </el-tabs>
      <component :is="tabName" ref="charts"></component>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>
<script>
import bar from './_part/bar'
import lineType from './_part/line'
import pie from './_part/pie'
export default {
  name: 'echars',
  data() {
    return {
      msg: '北京',
      tabName: 'line-type',
    //   count: 0
    }
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    console.log(lineType);
  },
  methods: {
    handleClick(tab, event) {
    },
  },
  components: {
    bar,
    lineType,
    pie
  },

}
</script>
<!-- 添加"scoped"属性，就可以限制当前样式表只作用于当前组件 -->
<style scoped>
</style>