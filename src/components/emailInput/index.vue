<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    class="no-drop"
    :popper-append-to-body="false"
    ref="select"
    placeholder="请填写联系人">
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      value: [],
    }
  },
  created() {
    window.addEventListener('keyup', (e) => {
      this.keyDownHandle(e)
    })
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyDownHandle())
  },
  mounted() {
    this.$refs.select.handleOptionSelect = function(option, byClick) {
      if (this.multiple) {
        const value = (this.value || []).slice();
        const noSpaceValue = option.value.trim().replace(/\.*;/g, '')

        const optionIndex = this.getValueIndex(value, `[${noSpaceValue}]`);
        console.log(value, option.value, optionIndex);
        if (optionIndex > -1) {
          // value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(`[${noSpaceValue}]`);
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
  },
  methods: {
    keyDownHandle(e) {
      if (e.code === 'Space'|| e.code==='Semicolon' ) {
        this.$refs.select.selectOption();
      }
    },
  }
}
</script>
<style lang="stylus" scoped>
.no-drop {
  /deep/ .el-select-dropdown {
    display none
  }
}
</style>