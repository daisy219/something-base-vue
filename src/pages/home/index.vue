<script>
import LineFilter from './components/lineFilter';
import DropDown from './components/dropDown';
import {areaCode} from '@/constant/areaCode';
import category from '@/constant/category';

export default {
  name: 'home',
  components: { LineFilter, DropDown },
  data() {
    return {
      time: [
        { label: '1年内', value: '1' },
        { label: '1-3年', value: '1-3' },
        { label: '3-5年', value: '3-5' },
        { label: '5-10年', value: '5-10' },
        { label: '10年以上', value: '10' },
      ],
      money: [
        { label: '1-10万', value: '1-10' },
        { label: '10-100万', value: '10-100' },
        { label: '100-1000万', value: '100-1000' },
        { label: '1000-5000万', value: '1000-5000' },
        { label: '5000万及以上', value: '5000' },
      ],
      province: areaCode,
      industry: category,
      selectObject: {
        province: [],
        city: [],
        industry: [],
        time: [],
        money: [],
      },
      selectList: [],
    }

  },
  props: {
  },
  computed: {
    // selectList() {
      
    // }
  },
  created() {
    // this.province = areaCode;
  },
  mounted() {
  },
  methods: {
    changeHandle(checked, item) {
      if (checked) {
        this.selectList.push(item);
      } else {
        const index = this.selectList.findIndex(a => a.value === item.value);
        this.selectList.splice(index, 1);
      }
    },
    colse(item) {
      const current = this.selectList.find(a => a.value === item.value);
      this.$set(current, 'checked', false);
      const index = this.selectList.findIndex(a => a.value === item.value);
      this.selectList.splice(index, 1);
    }

  },
}
</script>
<template>
  <div class="module_home_index common_page_container">
    <line-filter :title="'所属省份'" :list-config="province" :key="'province'" :type="'single'" />
    <line-filter :title="'所属行业'" :list-config="industry" :key="'industry'" :type="'single'" />
    <line-filter :title="'成立时间'" :list-config="time" :key="'time'" :type="'multiple'" @change-handle="changeHandle">
      <dropDown :type="'date'" :label-text="'年'"/>
    </line-filter>
    <line-filter :title="'注册资本'" :list-config="money" :key="'money'" :type="'multiple'" @change-handle="changeHandle">
      <dropDown />
    </line-filter>
    <line-filter :title="'已选条件'" :list-config="selectList" :key="'select'" :type="'select'" @colse="colse"/>
  </div>
</template>
<style scoped lang="stylus">

</style>