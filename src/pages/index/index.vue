<script>
// import publicCom from '../../components/head';
// import store from '../../store/index.js'

export default {
  name: 'index',
  components: {
    // 'public-com':publicCom
  }
}
</script>
<template>
  <div>
    <layout>
      <transition name="el-fade-in-linear" mode="out-in">
        <router-view></router-view>
      </transition>
    </layout>
  </div>
</template>
<style>

</style>
