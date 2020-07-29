<script>
//echarts折线图样式表
import echarts from "echarts";
export default {
	name: 'line',
	data() {
		return {
			lineOption: {
				title: {
					left: 'center',
					text: '折线图',
					subtext: '数据来自网络'  //副标题
				},
				xAxis: {  //控制x轴
					data: ['324', '182', '28', '131', '12', '3', '1'],//x轴数据，可传入数据
					splitLine:{         //x轴分割线
						show:true,      //x轴分割线是否展示
						lineStyle: {
							color: '#76BBE4',   //x轴分割线颜色
							width: 2,         //x轴分割线粗细
							type: 'dashed'
						}
					},
					axisLabel: {  //x轴坐标轴字体样式
						show: true,
						textStyle: {
							color: '#ffffff',  //x轴坐标轴字体颜色
							fontSize:'16'       //x轴坐标轴字体大小
						}
					},
					axisLine: {    //x轴坐标线
						show:true,   //x轴坐标线是否展示
						lineStyle: {
							color: '#76BBE4',   //x轴坐标线颜色
							width: 2            //x轴坐标线粗细
						}
					},
					axisPointer: {          //鼠标滑动展示效果
						show: true,         //鼠标滑动是否展示效果
						type:'shadow',      //类型 'line'或'shadow'
						lineStyle: {
							color: '#FFDA93',
							opacity: 0.5,
							width: 2
						},
						label: {
							show: true,    //鼠标滑过是否展示值
						},
						handle: {        //滑动效果下方的手动拖动
							show: true,
							color: '#FFDA93'
						}
					},
				},
				yAxis: { //同x轴
					type: 'value',
					axisPointer: {
							show: true,
					}
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					smooth: true,
					itemStyle: {
						normal: {
							color: '#EC8924'   //那条线的颜色
						}
					},
					areaStyle: {            //折线图下方区域样式控制
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{   //0,0,0,1从上到下渐变；0,0,1,0从左到右渐变
								offset: 0,
								color: '#EC8924'
							}, {
								offset: 0.3,
								color: '#EC8924'
							}, {
								offset: 0.6,
								color: '#8C8B4A'
							}, {
								offset: 0.8,
								color: '#8C8B4A'
							}, {
								offset: 1,
								color: '#3D5A86'
							}])
						}
					},
				}]
			}
		}
	},
	mounted() {
		console.log(11)
		this.chart_load();
	},
	methods: {
		chart_load() {
			const lineChart = echarts.init(document.getElementById('lineChart'));
			lineChart.setOption(this.lineOption);
		}
	}
}
</script>
<template>
	<div id="lineChart"></div>
</template>
<style scoped>
	#lineChart {
			width: 60%;
			height: 500px;
			background-color: cadetblue;
	}
</style>

