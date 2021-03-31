<template>
  <div class="drop-down">
    <el-dropdown trigger="click" :hide-on-click="hideOnClick" @visible-change="visibleChange" ref="elDropdown">
      <span class="el-dropdown-link">{{ title }}<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-form ref="form" :model="form" label-width="0" :rules="rules">
          <el-row>
            <el-col :span="4" class="center">从</el-col>
            <el-col :span="16">
              <el-form-item :prop="type === 'input' ? 'start' : 'startDate'">
                <el-input-number v-show="type === 'input'" size="mini" v-model="form.start" controls-position="right" :min="1" :step-strictly="true" />
                <el-date-picker v-show="type === 'date'" v-model="form.startDate" type="year" size="mini" placeholder="选择年" @change="(value) => chooseHandle('start', value)" />
              </el-form-item>
            </el-col>
            <el-col :span="4" class="center">{{ labelText }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="center">从</el-col>
            <el-col :span="16">
              <el-form-item :prop="type === 'input' ? 'end' : 'endDate'">
                <el-input-number v-show="type === 'input'" size="mini" v-model="form.end" controls-position="right" :min="1" :step-strictly="true" />
                <el-date-picker v-show="type === 'date'" v-model="form.endDate" type="year" size="mini" placeholder="选择年" @change="(value) => chooseHandle('end', value)"/>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="center">{{ labelText }}</el-col>
          </el-row>
          <div class="center">
            <p class="comfirm-btn" @click="comfirm">确定</p>
          </div>
        </el-form>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideOnClick: false,
      form: {
        startDate: undefined,
        endDate: undefined,
        start: undefined,
        end: undefined,
      },
      rules: {
        start: [
          { required: true, message: '请输入正确格式', trigger: 'blur' },
        ],
        end: [
          { required: true, message: '请输入正确格式', trigger: 'blur' },
        ],
        startDate: [
          { required: true, message: '请输入正确格式', trigger: 'blur' },
        ],
        endDate: [
          { required: true, message: '请输入正确格式', trigger: 'blur' },
        ],
      }
    }
  },
  props: {
    title: { type: String, default: '自定义' },
    type: { type: String, default: 'input' },
    labelText: { type: String, default: '万' },
  },
  methods: {
    visibleChange(value) {
      if (value) {
        this.$refs.form.resetFields();
      }
    },
    chooseHandle(type, value) {
      this.$set(this.form, type, new Date(value).getFullYear());
      this.$refs.elDropdown.show();
    },
    sort(a, b) {
      return a - b;
    },
    comfirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const sortArr = [this.form.start, this.form.end].sort(this.sort);
          const params = {
            label: `${sortArr[0]}-${sortArr[1]}${this.labelText}`,
            value: `${sortArr[0]}-${sortArr[1]}${this.labelText}`
          }
          this.$emit('confirm', params);
          this.$refs.elDropdown.hide();
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.drop-down
  font-size: 12px;
  .el-dropdown-link
    margin-left: 30px;
    cursor pointer
.el-dropdown-menu
  line-height 40px;
  color: #606266;
  .el-form-item
    margin-bottom: 10px;
  .el-form-item__error
    padding-top: 0;
  .el-input-number--mini
    width: 100%;
  .el-date-editor.el-input
    width: 100%;
  .comfirm-btn
    cursor pointer
    font-size: 12px;
</style>