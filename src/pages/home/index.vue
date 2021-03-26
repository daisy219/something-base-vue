<script>
import { treeData } from '@/constant/test';
import { Popup } from 'vant';
import recursion from './components/recursion';
import { throttle, debounce } from '@/utils/utils';

export default {
  name: 'home',
  components: { 'van-popup': Popup, recursion },
  data() {
    return {
      show: false,
      treeData: treeData.data,
      value: [],
      options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
    }

  },
  created() {
    window.addEventListener('keydown', (e) => {
      this.keyDownHandle(e)
    })
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
    },
    inputHandle: throttle((val)=> {
      console.log('test', val);
    }),
    keyDownHandle(e) {
      if (e.code === 'Space'|| e.key === ';') {
        this.$refs.select.selectOption()
        this.value = this.value.map(item => item.trim().split(';').join(''))
      }
    },
    selectBlur(e) {
      console.log(e);
      this.$refs.select.selectOption()
    }

  },
}
</script>
<template>
  <div class="module_home_index common_page_container">
    <div class="select-top">
      <div class="select-top-item" @click="show = true">案例推荐</div>
    </div>
    <input placeholder="请输入内容" @input="inputHandle" />
    <van-popup v-model="show" position="top">
      <recursion :data="treeData" :level="1" @select="selectHandle"/>
    </van-popup>
    {{value}}
    <el-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      class="no-drop"
      :popper-append-to-body="false"
      ref="select"
      @blur="selectBlur"
      placeholder="请填写联系人">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<style lang="stylus" scoped>
.no-drop {
  /deep/ .el-select-dropdown {
    display none
  }
}
</style>