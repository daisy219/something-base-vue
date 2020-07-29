<script>
export default {
  data() {
    return {
      player_width: 760,
      player_height: 650,
      hasfullscreen: true,
      autoplay: true,
    }
  },
  created() {

  },
  methods: {
    call_iframe_window_method(method_name, has_error) {
        try {
        const $iframe = this.$refs.iframe;
        if ( ! $iframe || ! $iframe.contentWindow) {
          if (has_error) { console.error('找不到 evk iframe: ' + this.iframe_src); }
        }
        if ( ! ($iframe.contentWindow)[method_name]) {
          if (has_error) { console.error('evk iframe 没有该方法: ' + method_name); }
        }
        const result = ($iframe.contentWindow)[method_name]();
        return result;
        } catch (err) {
        if (has_error) { console.warn(err); }
        return null;
      }
  }
  },
      computed: {
      iframe_src() {
        const imgpath = 'http://www.ischool365.com:11582/group1/M00/19/9D/CgoKc1yQmmyAKF9QAAD-v7WUUBM752.png,http://www.ischool365.com:11582/group1/M00/19/9D/CgoKc1yQmmyAYVcKACZ_hh98V3g079.png';
        const audiopath = 'http://www.ischool365.com:11582/group1/M00/19/9D/CgoKc1yQmmyAF0QDAAwmM3VLl_g742.mp3';
        const jsonpath = 'http://www.ischool365.com:11582/group1/M00/19/9D/CgoKc1yQmmyAUEtYAAO_iOapluc54.json';
        const size = `${this.player_width},${this.player_height - 40}`;
        const fullscreen = this.hasfullscreen ? 1 : 0;


    const autoplay = this.autoplay ? 1 : 0;

      return `/evk/evk.html?imgpath=${imgpath}&audiopath=${audiopath}&jsonpath=${jsonpath}&psize=${size}&inittime=${this.time}&fullscreen=${fullscreen}&play=${autoplay}`;    }
  }
}
</script>
<template>
  <div class="common_page_container">
    <!-- <iframe ref="iframe" class="eWebEditor" :src="'http://www.ischool365.com:11582' + iframe_src" :key="iframe_src"
    :style="{width: this.player_width + 'px', height: this.player_height + 'px'}"
    frameborder="0" scrolling="no"/> -->
    <!-- <iframe src="http://www.ischool365.com:11582/group1/M00/19/9D/CgoKc1yQmmyAKF9QAAD-v7WUUBM752.png" frameborder="0"/> -->
  </div>
</template>
<style>

</style>
