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
      selectObject: {},
      selectList: [],
    }

  },
  methods: {
    /** 多选 */
    changeHandle(checked, item) {
      if (checked) {
        this.selectList.push(item);
      } else {
        const index = this.selectList.findIndex(a => a.value === item.value);
        this.selectList.splice(index, 1);
      }
    },
    /** 关闭标签 */
    colse(item) {
      // 删除省
      if (item.filterKey === 'province') {
        this.$set(this.selectObject, 'province', null);
        this.$set(this.selectObject, 'city', null);
        const index = this.selectList.findIndex(a => a.filterKey === 'city');
        if (index !== -1) {
          this.selectList.splice(index, 1);
        }
      }
      // 删除市
      if (item.filterKey === 'city') {
        this.$set(this.selectObject, 'city', null);
      }
      // 删除一级行业
      if (item.filterKey === 'industry') {
        this.$set(this.selectObject, 'industry', null);
        this.$set(this.selectObject, 'industryChildren', null);
        const index = this.selectList.findIndex(a => a.filterKey === 'industryChildren');
        if (index !== -1) {
          this.selectList.splice(index, 1);
        }
      }
      // 删除二级行业
      if (item.filterKey === 'industryChildren') {
        this.$set(this.selectObject, 'industryChildren', null);
      }
      const current = this.selectList.find(a => a.value === item.value);
      this.$set(current, 'checked', false);
      const index = this.selectList.findIndex(a => a.value === item.value);
      this.selectList.splice(index, 1);
    },
    /** 下拉框确认 */
    dropDownConfirm(params) {
      this.selectList.push(params);
    },
    /** 单选 */
    singleChoose(key, item) {
      this.selectList.push(item);
      this.$set(this.selectObject, key, item);
    },
    /** 清空 */
    clearout() {
      this.selectList.forEach(item => this.$set(item, 'checked', false));
      this.selectList = [];
      this.selectObject = {};
    }

  },
}
</script>
<template>
  <div class="module_home_index common_page_container">
    <line-filter v-if="!(this.selectObject.province || {}).value"
      :title="'所属省份'" :list-config="province" :key="'province'" :type="'single'" filter-key="province"
      @single-choose="singleChoose"/>
    <line-filter v-if="(this.selectObject.province || {}).value && !(this.selectObject.city || {}).value && (this.selectObject.province || {}).city.length > 1"
      :title="'所属市'" :list-config="(this.selectObject.province || {}).city" :key="'city'" :type="'single'" filter-key="city"
      @single-choose="singleChoose"/>
    <line-filter v-if="!(this.selectObject.industry || {}).value"
      :title="'所属行业'" :list-config="industry" :key="'industry'" :type="'single'" filter-key="industry"
      @single-choose="singleChoose"/>
    <line-filter v-if="(this.selectObject.industry || {}).value && !(this.selectObject.industryChildren || {}).value"
      :title="'二级行业'" :list-config="(this.selectObject.industry || {}).children" :key="'industryChildren'" :type="'single'" filter-key="industryChildren"
      @single-choose="singleChoose"/>
    <line-filter :title="'成立时间'" :list-config="time" :key="'time'" :type="'multiple'" @change-handle="changeHandle">
      <dropDown :type="'date'" :label-text="'年'" @confirm="dropDownConfirm"/>
    </line-filter>
    <line-filter :title="'注册资本'" :list-config="money" :key="'money'" :type="'multiple'" @change-handle="changeHandle">
      <dropDown  @confirm="dropDownConfirm"/>
    </line-filter>
    <line-filter :title="'已选条件'" :list-config="selectList" :key="'select'" :type="'select'" @colse="colse" @clearout="clearout"/>
  </div>
</template>
<style scoped lang="stylus">

</style>