<script>
import echarts from 'echarts';
export default {
    name:'bar',
    data() {
        return {
            barOption: {
                color: ['#0FB2FF', '#FFC233', '#FD636D', '#27E581'],   
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    show: true,              //图标旁边标签样式设置
                    textStyle: {        //字体颜色
                        color: '#ffffff',
                    },
                    orient: 'vertical',
                    // x : '80%',
                    // y : 'center',
                    data:['0~59%','60%~80%','80%~90%','90%~100%']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['0~59%', '60%~80%', '80%~90%', '90%~100%'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLine: {               //坐标轴
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLine: { //隐藏y坐标轴
                            show:false
                        },
                        // splitLine:{ show:false}
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '25%',    //每根柱子的宽度
                        data: [52, 65, 78, 62],
                        itemStyle: {
                            //每根柱子不同颜色
                            normal:{
                　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                color: function (params){
                                    var colorList = ['#50ABFC','#FA7901','#6ABE4F','#FE555A'];
                                    return colorList[params.dataIndex];
                                }
                            },
                            //每根柱子颜色渐变 0, 0, 1, 0, 横向渐变；0, 0, 0, 1,纵向渐变
                            // normal: {
                            //     color: new echarts.graphic.LinearGradient(
                            //         0, 0, 1, 0,
                            //         [
                            //             {offset: 0, color: '#2D8DDA'},
                            //             {offset: 0.5, color: '#3E9FE6'},
                            //             {offset: 1, color: '#5FBCFF'}
                            //         ]
                            //     )
                            // }
                            //鼠标悬停时：
                            emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                    }
                ]
            }
        }
    },
    mounted() {
        this.chart_load();
    },
    methods: {
        chart_load() {
            const barChart = echarts.init(document.getElementById('barChart'));
            barChart.setOption(this.barOption);
        }
    }
}
</script>
<template>
    <div id="barChart"></div>
</template>
<style scoped>
    #barChart{
        background-color: tomato;
        width: 60%;
        height: 500px;
    }
</style>

