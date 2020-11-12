<template>
  <div class="line-wrap" :style="`height:${wrapHeight}`">
    <div class="line clearfix" ref="line">
      <span class="title fl">{{title}}：</span>
      <!-- 多选 -->
      <template v-if="type==='multiple'">
        <el-checkbox-group v-model="checkList" @change="changeHandle" class="fl">
          <el-checkbox v-for="(item, index) in listConfig" :key="index" v-bind="item"></el-checkbox>
        </el-checkbox-group>
        <slot />
      </template>
      <!-- 单选 -->
      <div v-if="type==='single'" class="block fl">
        <p class="single-text" v-for="(item, index) in listConfig" :key="index">{{item.label}}</p>
      </div>
      <!-- 已选 -->
      <div v-if="type==='select'" class="block fl">
        <p class="select-text" v-for="(item, index) in listConfig" :key="index">{{item.label}}<i class="el-icon-close"></i></p>
      </div>
      <span class="title fl pointer" v-if="showMoreBtn" @click="showMore = !showMore">更多<i :class="`el-icon-arrow-${showMore ? 'down' : 'up'}`"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'single' },
    title: { type: String, default: '' },
    listConfig: { type: Array, default() { return []; } }
  },
  data() {
    return {
      checkList: [],
      showMore: false,
      showMoreBtn: false,
    }
  },
  mounted() {
    if (this.$refs.line.offsetHeight > 40 && this.type !== 'select') {
      this.showMore = true;
      this.showMoreBtn = true;
    }
  },
  computed: {
    wrapHeight() {
      return this.type !== 'select' && this.showMore ? '30px' : '';
    }
  },
  methods: {
    changeHandle(value) {
      console.log(value);
      this.$emit('change-handle', value.map(item => ({label: item})));
    }
  }

}
</script>

<style scoped lang="stylus">
.line-wrap
  overflow hidden
  margin-bottom: 20px;
  .line
    font-size: 14px;
    color: #606266;
    line-height: 30px;
    .block
      width: 80%;
    .title
      margin-right: 20px;
    .single-text
      margin-right: 30px;
      display: inline-block;
      cursor: pointer;
      &:hover
        color #409EFF
    .select-text
      font-size 12px;
      line-height: 20px;
      padding: 4px;
      margin-right: 10px;
      display: inline-block;
      border 1px solid #b3d8ff;
      color: #409EFF;
      &:hover
        border-color #409EFF
      i
        cursor: pointer;

</style>