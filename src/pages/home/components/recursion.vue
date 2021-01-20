<template>
  <div class="recursion-part" :style="`padding-left: ${level * 5}px`">
    <div v-for="item in data" :key="item.id" class="recursion-line pointer">
      <div v-if="item.children && item.children.length !== 0" @click.stop="changeShow(item)">
        {{item.name}}
        <van-icon :class="['fr', item.showChildren ? 'up' : 'down']" name="arrow-down"/>
        <recursion :data="item.children" :style="`max-height: ${item.showChildren ? '100px' : 0}`" :level="level + 1" @select="selectHandle"/>
      </div>
      <div v-else @click.stop="selectHandle(item)">
        {{item.name}}
        <van-icon class="fr" v-show="item.checked" name="success" color="#07c160"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
  name: 'recursion',
  components: { 
    'van-icon': Icon
  },
  props: {
    data: { type: Array, default() { return []; } },
    level: { type: Number, default: 1 }
  },
  methods: {
    /** 选中 */
    selectHandle(item) {
      this.$emit('select', item)
    },
    changeShow(item) {
      this.$set(item, 'showChildren', !item.showChildren)
    },
  }
}
</script>

<style lang="stylus">
.recursion-part {
  transition all .6s
  .recursion-line {
    line-height 30px
    overflow hidden
    .van-icon {
      line-height 30px
    }
    .up {
      transition: all 0.3s;
      transform: rotate(180deg)
    }
    .down {
      transition: all 0.2s;
      transform: rotate(0deg)
    }
  }
}
</style>