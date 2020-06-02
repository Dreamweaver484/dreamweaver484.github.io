// 所在年级--柱状图bar
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {   // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "大一",
            "大二",
            "大三",
            "大四"
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "填写",
          type: "bar",
          barWidth: "35%",
          data: [11, 63, 17, 2],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
    // 数据变化
    // var dataAll = [
    //   { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    //   { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    // ];
    // $(".bar h2 ").on("click", "a", function() {
    //   option.series[0].data = dataAll[$(this).index()].data;
    //   myChart.setOption(option);
    // });
  })();

// 喜欢运动项目--饼图pie
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function(p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["跑步", "游泳", "篮球", "足球", "乒乓球","羽毛球"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "运动项目",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#FD7138",
          "#0095D3",
          "#E32631",
          "#267E1C",
          "#06a0ab",
          "#E338B2"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 29, name: "跑步" },
          { value: 4, name: "游泳" },
          { value: 22, name: "篮球" },
          { value: 5, name: "足球" },
          { value: 21, name: "乒乓球" },
          { value: 12, name: "羽毛球" },
        ]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 运动频率--饼图（南丁格尔图）定制pie2
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));

  option = {
    // title: {
    //   text: 'Customized Pie',
    //   left: 'center',
    //   top: 20,
    //   textStyle: {
    //       color: '#ccc'
    //   }
    // },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '运动频率',
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '几乎每天'},
                {value: 310, name: '一周两次及以上'},
                {value: 274, name: '一周1~2次'},
                {value: 235, name: '一个月1~2次'},
                {value: 400, name: '几乎不运动'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 5,
                length2: 10
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//运动目的-饼图pie3
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie3 .chart"));
  var data = [{
        name: '强身健体',
        value: 70
    }, {
        name: '减肥瘦身',
        value: 68
    }, {
        name: '外界压力',
        value: 48
    }, {
        name: '体育技能',
        value: 40
    }, {
        name: '社交',
        value: 32
    }, {
        name: '其他',
        value: 27
    }];
  option = {
    //   title: [{
    //     text: 'Pie label alignTo'
    // }, {
    //     subtext: 'alignTo: "none" (default)',
    //     left: '16.67%',
    //     top: '75%',
    //     textAlign: 'center'
    // }, {
    //     subtext: 'alignTo: "labelLine"',
    //     left: '50%',
    //     top: '75%',
    //     textAlign: 'center'
    // }, {
    //     subtext: 'alignTo: "edge"',
    //     left: '83.33%',
    //     top: '75%',
    //     textAlign: 'center'
    // }],
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['55%', '50%'],
        data: data,
        animation: true,
        label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
        },
        // left: 0,
        // right: '66.6667%',
        // top: 0,
        // bottom: 0
    }
    //  {
    //     type: 'pie',
    //     radius: '25%',
    //     center: ['50%', '50%'],
    //     data: data,
    //     animation: false,
    //     label: {
    //         position: 'outer',
    //         alignTo: 'labelLine',
    //         bleedMargin: 5
    //     },
    //     left: '33.3333%',
    //     right: '33.3333%',
    //     top: 0,
    //     bottom: 0
    // },
    // {
    //     type: 'pie',
    //     radius: '25%',
    //     center: ['50%', '50%'],
    //     data: data,
    //     animation: false,
    //     label: {
    //         position: 'outer',
    //         alignTo: 'edge',
    //         margin: 20
    //     },
    //     left: '66.6667%',
    //     right: 0,
    //     top: 0,
    //     bottom: 0
    // }
  ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 运动时间段分布line
(function() {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["男", "女"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "男",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: true,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          30,
          40,
          30,
          40,
          30
        ]
      },
      {
        name: "女",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: true,
        data: [
          130,
          10,
          20,
          40,
          30
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 每次运动花费时间bar2
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "26%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["30分钟以内", "30~60分钟", "1~2小时", "2小时以上"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [1, 3, 4, 7],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 25,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 4,
          barBorderRadius: 10
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//运动的时间段line2
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  // 2. 指定配置和数据
  var option = {
    // title: {
    //   text: 'Step Line'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['男', '女'],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
    },
    grid: {
        left: '0%',
        top:'15%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    //下载图标
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        data: ['上午', '中午', '下午', '晚上'],
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          }
      },
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
        {
            name: '男',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134],
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
            },
        },
        {
            name: '女',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234],
            lineStyle: {
              normal: {
                color: "#FD602F",
                width: 2
              }
            },
        }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//健身花费bar3
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar3 .chart"));
    option = {
      // title: {
      //     text: '世界人口总量',
      //     subtext: '数据来自网络'
      // },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          data: ['男', '女'],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
      },
      grid: {
          left: '3%',
          top:'15%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      },
      yAxis: {
          type: 'category',
          data: ['300元', '300-400元', '400-500元', '500元以上'],
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
      },
      series: [
          {
              name: '男',
              type: 'bar',
              data: [1, 1, 2, 3]
          },
          {
              name: '女',
              type: 'bar',
              data: [3, 6, 4, 2]
          }
      ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//选择运动地点bar4
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar4 .chart"));
  // 指定配置和数据
  var option = {
    grid: {
      left: '3%',
      top:'15%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['健身房', '学校体育馆', '操场'],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
    },
    series: [{
        data: [120, 200, 150],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//学校改善建议Sunburst
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".Sunburst .chart"));
  //这个是服务端的数据
  var originaldata = [
    {
        "value": 60,
        "name": "x",
        "children": [{
            "value": 40,
            "name": "a"
        }, {
            "value": 10,
            "name": "b"
        }, {
            "value": 10,
            "name": "c"
        }]
    },
    {
        "value": 40,
        "name": "y"
    },
    {
        "value": 40,
        "name": "z"
    }];
  //颜色
  var color1 = ["#1089E7", "#F57474", "#56D0E3"];
  var color2 = ["#F8B448", "#04A188", "#C23531"];
  //data0内环数据
  var data0 = [];
  for (var i = 0; i < originaldata.length; i++) {
      var obj = originaldata[i];//从服务端给的数组中取出数据
      data0.push({
          value: obj.value,
          name: obj.name,
          itemStyle: {
              color: color1[i]
          },
          labelLine: {
              length: 40,
              length2: 10
          }
      });
  }
  //data1外环数据
  var data1 = [];
  for (var i = 0; i < originaldata.length; i++) {
      var obj = originaldata[i];
      var kids = obj.children;
      //没有子数据，直接加入data1
      if (typeof(kids) === 'undefined') {
          data1.push({
              value: obj.value,
              name: obj.name,
              //没有子数据，将其设置为透明
              itemStyle: {
                  color: 'transparent'
              }
          });
      } else {
          for (var k = 0; k < kids.length; k++) {
              var kid = kids[k];
              data1.push({
                  value: kid.value,
                  name: kid.name,
                  itemStyle: {
                      color: color2[k]
                  },
                  label: {
                      normal: {
                          position: 'outside',
                          formatter: '{b} {d}% ',
                      }
                  }
              });
          }
      }
  }
  // 指定配置和数据
  option = {
      // backgroundColor: '#161823',
      series: [{
              name: '访问来源',
              type: 'pie',//饼图
              animation: true,
              radius: ['47%', '64%'],//内环尺寸
              label: {
                  normal: {
                      position: 'outside',
                      formatter: '{b} {d}% ',
                  }
              },
              labelLine: {
                  normal: {
                      show: true
                  },
              },
              data: data0
          },
          {
              name: '访问来源',
              type: 'pie',
              radius: ['74%', '90%'],//外环尺寸
              animation: true,
              data: data1
          }
      ],
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//备用旭日图
// (function() {
//   // 实例化对象
//   var myChart = echarts.init(document.querySelector(".Sunburst .chart"));
//   // 指定配置和数据
//   var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
// var bgColor = '#2E2733';

// var itemStyle = {
//     star5: {
//         color: colors[0]
//     },
//     star4: {
//         color: colors[1]
//     },
//     star3: {
//         color: colors[2]
//     },
//     star2: {
//         color: colors[3]
//     }
// };

// var data = [{
//     name: '男',
//     itemStyle: {
//         color: colors[1]
//     },
//     children: [{
//         name: '建议',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: '硬件设备'
//             }, {
//                 name: '增加组织运动次数'
//             }, {
//                 name: '组织竞赛'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: '提供卫生保障'
//             }, {
//                 name: '其他'
//             }, {
//                 name: 'xxx'
//             }]
//         }]
//     }, {
//         name: '其他',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'yyy'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'yyy'
//             }, {
//                 name: 'yyy'
//             }]
//         }, {
//             name: '3☆',
//             children: [{
//                 name: 'yyy'
//             }]
//         }]
//     }]
// }, {
//     name: '女',
//     itemStyle: {
//         color: colors[2]
//     },
//     children: [{
//         name: '111',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'zzz'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'zzz'
//             }, {
//                 name: 'zzz'
//             }]
//         }]
//     }, {
//         name: '222',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'aaa'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'aaa'
//             }, {
//                 name: 'aaa'
//             }, {
//                 name: 'aaa',
//             }]
//         }]
//     }, {
//         name: '333',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'bbb'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'bbb'
//             }, {
//                 name: 'bbb'
//             }]
//         }, {
//             name: '3☆',
//         }, {
//             name: '2☆',
//             children: [{
//                 name: 'bbb'
//             }]
//         }]
//     }, {
//         name: '444',
//         children: [{
//             name: '4☆',
//             children: [{
//                 name: 'bbb'
//             }, {
//                 name: 'bbb'
//             }, {
//                 name: 'bbb'
//             }]
//         }]
//     }, {
//         name: '555',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'ccc'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'ccc'
//             }, {
//                 name: 'ccc'
//             }]
//         }, {
//             name: '3☆',
//             children: [{
//                 name: 'ccc'
//             }]
//         }]
//     }, {
//         name: '666',
//         children: [{
//             name: '4☆',
//             children: [{
//                 name: 'ddd'
//             }]
//         }]
//     }, {
//         name: '777',
//         children: [{
//             name: '5☆',
//             children: [{
//                 name: 'eee'
//             }]
//         }, {
//             name: '4☆',
//             children: [{
//                 name: 'eee'
//             }]
//         }]
//     }]
// }];

// for (var j = 0; j < data.length; ++j) {
//     var level1 = data[j].children;
//     for (var i = 0; i < level1.length; ++i) {
//         var block = level1[i].children;
//         var bookScore = [];
//         var bookScoreId;
//         for (var star = 0; star < block.length; ++star) {
//             var style = (function (name) {
//                 switch (name) {
//                     case '5☆':
//                         bookScoreId = 0;
//                         return itemStyle.star5;
//                     case '4☆':
//                         bookScoreId = 1;
//                         return itemStyle.star4;
//                     case '3☆':
//                         bookScoreId = 2;
//                         return itemStyle.star3;
//                     case '2☆':
//                         bookScoreId = 3;
//                         return itemStyle.star2;
//                 }
//             })(block[star].name);

//             block[star].label = {
//                 color: style.color,
//                 downplay: {
//                     opacity: 0.5
//                 }
//             };

//             if (block[star].children) {
//                 style = {
//                     opacity: 1,
//                     color: style.color
//                 };
//                 block[star].children.forEach(function (book) {
//                     book.value = 1;
//                     book.itemStyle = style;

//                     book.label = {
//                         color: style.color
//                     };

//                     var value = 1;
//                     if (bookScoreId === 0 || bookScoreId === 3) {
//                         value = 5;
//                     }

//                     if (bookScore[bookScoreId]) {
//                         bookScore[bookScoreId].value += value;
//                     }
//                     else {
//                         bookScore[bookScoreId] = {
//                             color: colors[bookScoreId],
//                             value: value
//                         };
//                     }
//                 });
//             }
//         }

//         level1[i].itemStyle = {
//             color: data[j].itemStyle.color
//         };
//     }
// }

// option = {
//     backgroundColor: bgColor,
//     color: colors,
//     series: [{
//         type: 'sunburst',
//         center: ['50%', '48%'],
//         data: data,
//         sort: function (a, b) {
//             if (a.depth === 1) {
//                 return b.getValue() - a.getValue();
//             }
//             else {
//                 return a.dataIndex - b.dataIndex;
//             }
//         },
//         label: {
//             rotate: 'radial',
//             color: bgColor
//         },
//         itemStyle: {
//             borderColor: bgColor,
//             borderWidth: 2
//         },
//         levels: [{}, {
//             r0: 0,
//             r: 40,
//             label: {
//                 rotate: 0
//             }
//         }, {
//             r0: 40,
//             r: 105
//         }, {
//             r0: 115,
//             r: 140,
//             itemStyle: {
//                 shadowBlur: 2,
//                 shadowColor: colors[2],
//                 color: 'transparent'
//             },
//             label: {
//                 rotate: 'tangential',
//                 fontSize: 10,
//                 color: colors[0]
//             }
//         }, {
//             r0: 140,
//             r: 145,
//             itemStyle: {
//                 shadowBlur: 80,
//                 shadowColor: colors[0]
//             },
//             label: {
//                 position: 'outside',
//                 textShadowBlur: 5,
//                 textShadowColor: '#333',
//             },
//             downplay: {
//                 label: {
//                     opacity: 0.5
//                 }
//             }
//         }]
//     }]
// };
//   // 把配置给实例对象
//   myChart.setOption(option);
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();