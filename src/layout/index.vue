<script>
import { MODULES_INFO } from '@/constant/module';

export default {
	name: 'layout',
	components: {
	},
	data() {
		return {
			MODULES_INFO: MODULES_INFO,
		}
	},
	props: {
	// msg: {type: string, default: ''}
	},
	created() {
	},
	mounted() {
	},
	methods: {
		enter_page(route) {
		this.$router.push({name: route});
		}
	},
	computed: {
	}
}
</script>
<template>
  <div class="module_layout_common">
		<div class="header">
			<div class="header_contain">
				<div class="menu">
					<div v-for="item in MODULES_INFO" :key="item.route" :class="['menu_item', {'active': $route.name === item.route}]" @click="enter_page(item.route)">
							{{item.name}}
					</div>
				</div>
			</div>
		</div>
		<slot />
		<div class="footer">
				<!-- <p class="copy_right">© 2015 Stabocks Corpot Allright 京ICP09020041</p> -->
		</div>
  </div>
</template>
<style lang="stylus" scoped>
@import '~@/assets/stylus/var'

.module_layout_common
    .header
        width 100%
        height 74px
        background-color $bg_color
        .header_contain
            width 1200px
            margin 0 auto
            .logo_img
                float left
                margin-top 8px
                img
                    width 60px
                    height 60px
            .menu
                float right
                .menu_item
                    width 100px
                    height 74px
                    line-height 74px
                    text-align center
                    float left
                    cursor pointer
            .active
                color $nav_font_color
    .footer
        width 100%
        height 200px
        background-color $main_color

</style>