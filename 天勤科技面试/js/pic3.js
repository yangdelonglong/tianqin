// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('yuan'));
var myChart1 = echarts.init(document.getElementById('yuan1'));
var myChart2 = echarts.init(document.getElementById('yuan2'));
var myChart3 = echarts.init(document.getElementById('tiao'));
var myChart4 = echarts.init(document.getElementById('mmmmm'));
var myChart5 = echarts.init(document.getElementById('aaaaa'));
// 指定图表的配置项和数据
var option5 = {

	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	legend: {
		data: ['2011年', '2012年']
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: {
		type: 'value',
		boundaryGap: [0, 0.01]
	},
	yAxis: {
		type: 'category',
		data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
	},
	series: [{
			name: '2011年',
			type: 'bar',
			data: [18203, 23489, 29034, 104970, 131744, 630230]
		},
		{
			name: '2012年',
			type: 'bar',
			data: [19325, 23438, 31000, 121594, 134141, 681807]
		}
	]
};

var option2 = {
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
	},

	series: [{

		type: 'pie',
		radius: '100%',
		avoidLabelOverlap: false,
		label: {

			emphasis: {
				show: true,
				textStyle: {
					fontSize: '30',
					fontWeight: 'bold'
				}
			}
		},

		data: [{
				value: 69,
				name: '69.6'
			},
			{
				value: 31,
				name: '30.4'
			},

		]
	}]
};
var option1 = {
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		data: [120, 200, 150, 80, 70, 110, 130],
		type: 'bar'
	}]
};
var option = {

	series: [{

		type: 'pie',
		radius: ['50%', '70%'],

		data: [{
				value: 75
			},
			{
				value: 25
			},

		]
	}]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart1.setOption(option);
myChart2.setOption(option);
myChart3.setOption(option1);
myChart4.setOption(option2);
myChart5.setOption(option5);