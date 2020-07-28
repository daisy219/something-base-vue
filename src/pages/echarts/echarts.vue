<template>
  <div class="echars">
    <!-- <button @click="changestore">改变store</button> -->
    <el-tabs v-model="tabName" type="card" @tab-click="handleClick">
        <el-tab-pane label="柱状图" name="bar"></el-tab-pane>
        <el-tab-pane label="折线图" name="line"></el-tab-pane>
        <el-tab-pane label="饼图" name="pie"></el-tab-pane>
    </el-tabs>
    <component :is="tabName" ref="charts"></component>
    <div class="had_ref"></div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import bar from './_part/bar'
import line from './_part/line'
import pie from './_part/pie'
import store from '../../store/index.js'
export default {
  name: 'echars',
  data () {
    return {
      msg: '北京',
      tabName: 'bar',
    //   count: 0
    }
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    console.log(this.$refs.charts)
  },
  methods: {
    changestore() {
        store.commit('increment')
        // this.count = store.state.count
    },
    handleClick(tab, event) {
    },

  },
  components: {
      'bar': bar,
      'line': line,
      'pie': pie
  },
  computed: {
      count() {
          return this.$store.state.count
      }
  }
}
</script>
<!-- 添加"scoped"属性，就可以限制当前样式表只作用于当前组件 -->
<style scoped>

    ul, li{
        list-style: none;
    }

    .echars{
        padding: 0 150px;
        width: 100%;
        height: 750px;
        /* background-color: bisque; */
    }
    .menu li{
        float: left;
        margin-right: 10px;
        width: 200px;
        height: 50px;
        background-color: brown;
    }
</style>