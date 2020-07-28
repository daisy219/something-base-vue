<script>
import { get_down_upload_info } from '../../services/wkdemo';

export default {
  name: 'wkdemo',
  data() {
    return {
      url: 'edutech://wkmaster/?uid=10002697&token=863553b36ef25f0c212d9465bcc9b4a4&host=10.10.10.116:9002&share=2&id=837&bookid=10001199&gradeid=6&subid=4&questionid=837&type=COACH_WEIKE',
    }
  },
  methods: {
    async get_down_upload_info(event) {
      console.log(event)
      // console.log(this.$refs.wk.attributes.href)
      console.log(window);
        window.protocolCheck($(this).attr("href"),
            function () {
                alert("protocol not recognized");
            });
        // event.preventDefault ? event.preventDefault() : event.returnValue = false;



      // const params = {}
      // const result = await get_down_upload_info(params)

      // if ( result.data.url ) {
      //   this.url = result.data.url;
      // }
      // console.log(this.url);
    }
  }
}
</script>
<template>
  <a @click="get_down_upload_info" :href="url">微课大师</a>
  <!-- <a @click="get_down_upload_info" ref="wk">微课大师</a> -->
</template>

