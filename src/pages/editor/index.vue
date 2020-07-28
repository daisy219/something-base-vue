<script>
import { create_ewebeditor_src } from '@/config';
import { uuid, filter_unvalid_space } from '@/utils/utils';

export default {
  name:'editor',
  data() {
    return {
      initContent: '',
      height: 350,
      width: 750,
      editor_key: uuid(),
      value: '',
    }
  },
  props: {
  // msg: string
  },
  created() {
  },
  mounted() {
  },
  methods: {
        /** 获取富文本 module */
    get_editor() {
      const editor_module = this.$refs.iframe;
      if ( ! editor_module || ! editor_module.contentWindow
        || ! editor_module.contentWindow.getHTML
        || ! editor_module.contentWindow.setHTML) { return null; }

      return editor_module.contentWindow;
    },

    /** 获取富文本输入的内容 */
    get_content() {
      try {
        const editor = this.get_editor();
        if ( ! editor) { return ''; }

        return editor.getHTML() || '';
      } catch (err) { return ''; }
    },
    get_text() {
      try {
        const editor = this.get_editor();
        if ( ! editor) { return ''; }

        return filter_unvalid_space(editor.getText() || '');
      } catch (err) { return ''; }
    },

    /** 设置富文本的内容 */
    set_content(content) {
      try {
        const editor = this.get_editor();
        this.value = content;
        if ( ! editor || ! editor.setHTML) { return; }

        editor.setHTML(content || '');
      } catch (err) {
        // console.warn(err);
      }
    }
  },
  components: {
  },
  computed: {
    editor_src() {
      return create_ewebeditor_src(this.editor_key);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val, oldval) {
        console.log(val. oldval);
      }
    }
  }
}
</script>
<template>
  <div class="module_ewebeditor">
    <input type="hidden" :name="`content${editor_key}`" :value="value" />
    <iframe ref="iframe" class="eWebEditor" :src="'http://www.ischool365.com:11582' + editor_src"
      frameborder="0" scrolling="no" :width="width" :height="height"
      :style="{width: width + 'px', height: height + 'px'}" />
  </div>
</template>
<style scoped>
</style>