<template>
  <div>
    <div class="select-top">
      <div class="select-top-item" @click="show = true">案例推荐</div>
    </div>
    <van-popup v-model="show" position="top">
      <recursion :data="treeData" :level="1" @select="selectHandle"/>
    </van-popup>
  </div>
</template>

<script>
import { treeData } from '@/constant/test';
import { Popup } from 'vant';
import recursion from './recursion';
import { flatten } from '@/utils/utils';

export default {
  components: { 'van-popup': Popup, recursion },
  data() {
    return {
      show: false,
      treeData: treeData.data,
    }
  },
  methods: {
    selectHandle(item) {
      const flattenData = flatten(this.treeData);
      flattenData.forEach(a => {
        this.$set(a, 'checked', false)
      })
      this.$set(item, 'checked' , true);
    },
  }
}
</script>

