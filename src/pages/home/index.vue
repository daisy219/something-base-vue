<script>
import { treeData } from '@/constant/test';
import { Popup } from 'vant';
import recursion from './components/recursion';
export default {
  name: 'home',
  components: { 'van-popup': Popup, recursion },
  data() {
    return {
      show: false,
      treeData: treeData.data,
    }

  },
  methods: {
    selectHandle(item) {
      const flattenData = this.flatten(this.treeData);
      flattenData.forEach(a => {
        this.$set(a, 'checked', false)
      })
      this.$set(item, 'checked' , true);
    },
    /** 展平多维数组 */
    flatten (items, children = 'children') {
      let newArr = [];
      items.forEach(item => {
        newArr.push(item);
        if (Array.isArray(item[children])) {
          newArr = newArr.concat(this.flatten(item[children]));
        }
      });
      return newArr;
    }

  },
}
</script>
<template>
  <div class="module_home_index common_page_container">
    <div class="select-top">
      <div class="select-top-item" @click="show = true">案例推荐</div>
    </div>
    <van-popup v-model="show" position="top">
      <recursion :data="treeData" :level="1" @select="selectHandle"/>
    </van-popup>
  </div>
</template>
<style scoped lang="stylus">
</style>