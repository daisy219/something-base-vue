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
      // fn: function(){}
    }

  },
  watch: {
    value: {
      deep: true,
      handler(val) {
        console.log(val)
        // val.forEach(e=>{
        //   if(e.trim()){

        //   }
        // })
      }
    }
  },
  created() {
    window.addEventListener('keyup', (e) => {
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
    // inputHandle: throttle((val)=> {
    //   console.log('test', val);
    // }),
    keyDownHandle(e) {
      console.log(e)
      if (e.code === 'Space'|| e.code==='Semicolon' ) {
        const currentValue = (this.$refs.select.options[this.$refs.select.hoverIndex] || {}).value || '';

        if (currentValue.trim().replace(/\.*;/g, '')) {
          // debugger
          console.log(this.$refs.select)
          this.$refs.select.handleOptionSelect = function(option, byClick) {
            // debugger
                    if (this.multiple) {
          const value = (this.value || []).slice();
          const optionIndex = this.getValueIndex(value, option.value);
          if (optionIndex > -1) {
            // value.splice(optionIndex, 1);
          } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
            value.push(option.value);
          }
          this.$emit('input', value);
          this.emitChange(value);
          if (option.created) {
            this.query = '';
            this.handleQueryChange('');
            this.inputLength = 20;
          }
          if (this.filterable) this.$refs.input.focus();
        } else {
          this.$emit('input', option.value);
          this.emitChange(option.value);
          this.visible = false;
        }
        this.isSilentBlur = byClick;
        this.setSoftFocus();
        if (this.visible) return;
        this.$nextTick(() => {
          this.scrollToOption(option);
        });
          }
          this.$refs.select.selectOption()


        }
      }

    },
    selectBlur(e) {
      console.log(e);
      this.$refs.select.selectOption()
    },
    inputHandle(val) {
      // const currentValue = (this.$refs.select.options[this.$refs.select.hoverIndex] || {}).value || '';
      // const currentIndex = this.$refs.select.getValueIndex(val, currentValue);
      // if (currentValue.trim().replace(/\.*;/g, '')) {
      //   this.$set(this.value, currentIndex, `[${currentValue.trim().replace(/\.*;/g, '')}]`);
      // }
    },

  },
}
</script>
<template>
  <div class="module_home_index common_page_container">
    <!-- <div class="select-top">
      <div class="select-top-item" @click="show = true">案例推荐</div>
    </div>
    <input placeholder="请输入内容" @input="inputHandle" /> -->
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
      @change="inputHandle"
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