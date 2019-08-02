// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main3'));
var myChart1 = echarts.init(document.getElementById('main-4-l'));
var myChart2 = echarts.init(document.getElementById('main-4-r'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '曲线图数据展示',
        x:'center',
        textStyle:{
		　　fontWeight: 'normal',
		　　color: '#000'
		},
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
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
            boundaryGap: ['20%', '20%'],
            data : ['01/26','01/28','01/30','02/01','02/03','02/05','02/07', '02/09', '02/11', '02/13', '02/15', '02/17', '02/19', '02/21', '02/23']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                  formatter: '{value} 人'
            },
        }
    ],
    series : [
        {
            name:'访问人数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {color: '#f3f6fd'},
            itemStyle: {
            	color: '#4486ef'
            },
            lineStyle: {
            	color: '#4486ef',
            },
            data:[8972, 6778, 7456, 5824, 8123, 300, 300, 5319, 7463, 1435, 9426, 8387, 8297, 445, 9135]
        }
    ]
};

var option1 = {
      title : {
        text: '饼状图数据展示',
        x:'center',
        textStyle:{
		　　fontWeight: 'normal',
		　　color: '#000'
		},
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '日期占比',
            type: 'pie',
            center: ['50%', '62%'],
            data:[
                {value:335, name:'Mon'},
                {value:310, name:'Tud'},
                {value:234, name:'Wed'},
                {value:135, name:'Thu'},
                {value:1548, name:'Fri'},
                {value:1002, name:'Sat'},
                {value:800, name:'Sun'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var option2 = {
	title: {
		text: '柱状图数据展示',
		x:'center',
        textStyle:{
		　　fontWeight: 'normal',
		　　color: '#000'
		},
	},
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }, 
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: '商品数',
            axisLine: {
            	show: false,
            	lineStyle: {
            		type: 'dashed'
            	}
            },
            splitLine: {
            	lineStyle: {
            		type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'当日合计',
            type:'bar',
            barWidth: '25%',
            data:[10, 12, 8, 9, 8, 13, 5]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart1.setOption(option1);
myChart2.setOption(option2);
