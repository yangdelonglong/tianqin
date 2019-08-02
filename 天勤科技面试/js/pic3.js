// 基于准备好的dom，初始化echarts实例


//ajax获取图表的动态数据
function myData(text) {
 	console.log(text);
 	var myChart = echarts.init(document.getElementById('main3'));
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
            data: text.data.xAxis
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
            data:text.data.series
        }
    ]
};
 	myChart.setOption(option);
 }

function myData2(text) {
 	console.log(text);
 	var textData = [];
 	for(var i = 0;i<text.data.xAxis.length;i++) {
 		textData.push({value:text.data.series[i], name:text.data.xAxis[i]});
 	}
 	var myChart1 = echarts.init(document.getElementById('main-4-l'));
	var myChart2 = echarts.init(document.getElementById('main-4-r'));
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
	            data:textData,
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
	            data : text.data.xAxis,
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
	            data:text.data.series
	        }
	    ]
	};

 	myChart1.setOption(option1);
	myChart2.setOption(option2);
 }

function myJson() {
  	$.ajax({
  		type:"get",
  		url:"https://edu.telking.com/api/",
  		data: {
  			type: "month"
  		},
  		dataType: "jsonp",
  		success: function(data) {
  			myData(data)
  		}
  	})
}
function myJson2() {
  	$.ajax({
  		type:"get",
  		url:"https://edu.telking.com/api/",
  		data: {
  			type: "week"
  		},
  		dataType: "jsonp",
  		success: function(data) {
  			myData2(data)
  		}
  	})
}
myJson();
myJson2();

//轮播
var lunbo = document.getElementById("lunbo");
var next = lunbo.getElementsByClassName("next")[0];
var previous = lunbo.getElementsByClassName("previous")[0];
var img = lunbo.getElementsByTagName("img")[0];
var circles = lunbo.getElementsByClassName("lunbo-item");
var pic_id = 3;
function goNext () {
	for(var i = 0; i<circles.length; i++) {
		circles[i].className = "lunbo-item";
	}
	pic_id++;
	if(pic_id == 6) {
		pic_id = 1;
	}
	circles[pic_id-1].className = "lunbo-item sel";
	img.src = "img/lunbo"+pic_id+".jpg";
}
function goBack () {
	for(var i = 0; i<circles.length; i++) {
		circles[i].className = "lunbo-item";
	}
	pic_id--;
	if(pic_id == 0) {
		pic_id = 5;
	}
	circles[pic_id-1].className = "lunbo-item sel";
	img.src = "img/lunbo"+pic_id+".jpg";
}
next.onclick = function() {
	goNext();
}
previous.onclick = function() {
	goBack();
}
for(var i = 0; i<circles.length; i++) {
	circles[i].setAttribute("itemId",i);
	circles[i].onclick = function () {
		for(var j= 0; j<circles.length; j++) {
			circles[j].className = "lunbo-item";
		}
		this.className = "lunbo-item sel";
		pic_id = parseInt(this.getAttribute("itemId"))+1;
		img.src = "img/lunbo"+pic_id+".jpg";
	}
}
var lun = setInterval(goNext,5000);
lunbo.onmouseover = function() {
	clearInterval(lun);
}
lunbo.onmouseout = function() {
	lun = setInterval(goNext,5000);
}
