<script>
import echarts from 'echarts';
export default {
	data() {
		return {
			pieOption: {
				title: {
					text: '基础雷达图'
				},
				tooltip: {
					trigger: 'axis',
					// formatter: function (params) {
					//     console.log(params);
					// },
				},
				radar: {
					indicator: [
						{ name: '苹果', max: 6500},
						{ name: '西瓜', max: 16000},
						{ name: '葡萄', max: 30000},
						{ name: '哈密瓜', max: 38000},
						{ name: '香蕉', max: 52000},
						{ name: '桃', max: 25000}
					]
				},
				series: [{
					type: 'radar',
					data : [
						{
							value : [4300, 10000, 28000, 35000, 50000, 19000],
							name : '水果',
							//这里的配置显示数值
							label: {
								normal: {
									show: true,
									formatter:function(params) {
										return params.value;
									}
								}
							}
						}
					]
				}]
				// tooltip : {
				//     trigger: 'item',
				//     formatter: "{a} <br/>{b} : {c} ({d}%)"
				// },
				// color: ['#0FB2FF', '#FFC233', '#FD636D', '#27E581'],
				// legend: {              //图标旁边标签样式设置
				//     textStyle: {        //字体颜色
				//         color: '#ffffff',
				//     },
				//     orient: 'vertical',
				//     x : '80%',
				//     y : 'center',
				//     data:['导学本','作业辅导','网络作业','题库']
				// },
				// toolbox: {       //右上角工具箱
				//     show : true,  //是否展示
				//     feature : {
				//         mark : {show: true},
				//         dataView : {show: true, readOnly: false},  //查询数据视图
				//         magicType : {
				//             show: true,
				//             type: ['pie', 'funnel']
				//         },
				//         restore : {show: true},         //还原 重置
				//         saveAsImage : {show: true}      //保存为图片
				//     }
				// },
				// calculable : true,
				// series : [
				//     {
				//         name:'综合报表',
				//         type:'pie',
				//         radius : [20, 100],  //内空心半径和外半径，不空心时只写一个半径就行
				//         center : ['50%', '50%'], //饼图位置
				//         roseType : 'radius',
				//         label: {          
				//             normal: {
				//                 position:'inside', //饼图上的指示显示在饼图中
				//                 formatter: "{d}%",//a-name,b-每个data的name,c-每个value,d-百分比,写在{}里面。
				//                 show: true     //饼图上的指示箭头，正常情况显示不显示
				//             },
				//             emphasis: {
				//                 show: true      //饼图上的指示箭头，鼠标滑过的时候显示不显示
				//             }
				//         },
				//         data: [{ value: 50, name: '导学本'},
				//                 {value: 56, name: '作业辅导'}, 
				//                 {value: 84, name: '网络作业'},
				//                 {value: 53, name: '题库'}]
				//     }
				// ]
			}
		}
	},
	mounted() {
		this.chart_load();
	},
	methods: {
		chart_load() {
			const pieChart = echarts.init(document.getElementById('pieChart'));
			pieChart.setOption(this.pieOption);
		}
	}
}
</script>
<template>
	<div id="pieChart"></div>
</template>
<style>

</style>
<style>
	#pieChart{
		background-color: yellowgreen;
		width: 60%;
		height: 500px;
	}
</style>

