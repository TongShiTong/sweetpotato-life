// pages/task/index.js
import * as echarts from '../../components/ec-canvas/echarts';
import api from '../../utils/api.js'
const app = getApp();
var lessonMonthArr = [];
var lessonCountArr = [];
var lessonChart = null;
// function initChart(canvas, width, height, dpr) {
//   const chart = echarts.init(canvas, null, {
//     width: width,
//     height: height,
//     devicePixelRatio: dpr // new
//   });
//   canvas.setChart(chart);

//   var option = {
//     // title: {
//     //   text: '测试下面legend的红色区域不应被裁剪',
//     //   left: 'center'
//     // },
//     color: ["#FF5704"],
//     // legend: {
//     //   data: ['A', 'B', 'C'],
//     //   top: 50,
//     //   left: 'center',
//     //   backgroundColor: 'red',
//     //   z: 100
//     // },
//     grid: {
//       containLabel: true,
//       left: 0,
//       top: 20,
//       right:10,
//       bottom:30
//     },
//     tooltip: {
//       show: true,
//       trigger: 'axis'
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       axisLine:{
//         lineStyle: {
//           color: '#8C8C8C'
//         }
//       },
//       data: lessonMonthArr,
//     },
//     yAxis: {
//       x: 'center',
//       type: 'value',
//       axisLine:{
//         show: false,
//         lineStyle: {
//           color: '#8C8C8C'
//         }
//       },

//       // scale : true,
//       // max : 1000,
//       // min : 0,
//       // splitNumber : 5,
//       // boundaryGap : [ 0.2, 0.2 ],

//       splitLine: {
//         lineStyle: {
//           type: 'solid'
//         }
//       }
//     },
//     series: [{
//       name: 'A',
//       type: 'line',
//       symbol: 'circle',
      
//       smooth: true,
//       data: lessonCountArr
//     }
//     // , {
//     //   name: 'B',
//     //   type: 'line',
//     //   smooth: true,
//     //   data: [12, 50, 51, 35, 70, 30, 20]
//     // }, {
//     //   name: 'C',
//     //   type: 'line',
//     //   smooth: true,
//     //   data: [10, 30, 31, 50, 40, 20, 10]
//     // }
//   ]
//   };

//   chart.setOption(option);
//   return chart;
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopue:false,
    showFitPopue: false,
    date: '',
    // ec: {
    //   onInit: initChart
    // },
    // lessonLine: {
    //   lazyLoad: true 
    // },
    allTaskList: [],
    myTaskList:[],
    userInfo: wx.getStorageSync('userInfo'),
    currentIndex:0,
    kehuInfo: {},//客户信息
    orderInfo: {}, //订单数据
    monthInfo: {
      profitMoney:0,
      regionMoney:0,
      commissionMoney:0,
      assessMoney: 0,
      subsidyMoney: 0
    }, //月收益
    partnerInfo: {
      salesVolume: 0
    }, //合伙人管理信息
    areaInfo: {}, //区域管理信息
    areaScale:'' //设置区域比例
  },
  swiperChange(e){
    this.setData({
      currentIndex:e.detail.current
    })
  },
  // 跳转分享
  buyGood(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/ranking/index?id=' + id
    })
  },
  // 跳转web页面
  bindWeb(e) {
    let link = e.currentTarget.dataset.link
    wx.navigateTo({
      url: '/pages/webLink/index?link=' + link,
    }) 
  },
// 取消弹框
  close() {
    this.setData({
      showPopue: false
    })
  },
  // 收益确认取消
  fitClose() {
    this.setData({
      showFitPopue: false
    })
  },
  confirm1() {
    wx.navigateTo({
      url: '/pages/profit/index',
    })
  },
  setFanli(e) {
    let name = e.currentTarget.dataset.name
    let id = e.currentTarget.dataset.id
    let scale = e.currentTarget.dataset.scale
    this.setData({
      showPopue: true,
      name: name,
      id: id,
      areaScale: scale
    })
  },
  // 选择时间
  bindDateChange: function(e) {
    console.log(e)
    this.setData({
      date: e.detail.value
    })
    this.getZhexianInfo(this.data.date)
  },
  //触摸事件
  preventTouchMove(){},

  init_lessonChart() {
    this.lessonChartComponnet = this.selectComponent('#mychart-dom-line'); 
    this.lessonChartComponnet.init((canvas, width, height) => {
      lessonChart = echarts.init(canvas, null, {       
        width: width,
        height: height,
      });
      lessonChart.setOption(this.getLineOption()); 
      return lessonChart; 
    });    
  },

  getLineOption(xData, data) {
    var option = {
      // title: {
      //   text: '测试下面legend的红色区域不应被裁剪',
      //   left: 'center'
      // },
      color: ["#FF5704"],
      // legend: {
      //   data: ['A', 'B', 'C'],
      //   top: 50,
      //   left: 'center',
      //   backgroundColor: 'red',
      //   z: 100
      // },
      grid: {
        containLabel: true,
        left: 0,
        top: 20,
        right:20,
        bottom:30
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{
          lineStyle: {
            color: '#8C8C8C'
          }
        },
        data: lessonMonthArr,
      },
      yAxis: {
        x: 'center',
        type: 'value',
        axisLine:{
          show: false,
          lineStyle: {
            color: '#8C8C8C'
          }
        },
  
        // scale : true,
        max : 1000,
        min : 0,
        splitNumber : 5,
        boundaryGap : [ 0.2, 0.2 ],
  
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: "#8C8C8C",
          }
        }
      },
      series: [{
        name: '预计收益',
        type: 'line',
        symbol: 'circle',
        
        smooth: true,
        data: lessonCountArr
      }
      // , {
      //   name: 'B',
      //   type: 'line',
      //   smooth: true,
      //   data: [12, 50, 51, 35, 70, 30, 20]
      // }, {
      //   name: 'C',
      //   type: 'line',
      //   smooth: true,
      //   data: [10, 30, 31, 50, 40, 20, 10]
      // }
    ]
    };

    return option;

  },
  // 获取个人信息
  getUserInfo() {
    api.getInfo().then(res=>{
      if(res.code=="801") {
        wx.setStorageSync('userInfo', res.result)
        let userInfo = res.result
        this.setData({
          userInfo: userInfo
        })
      }
    })
  },
  // 滚动时候横线的进度
  lineScroll(e) {
    let x=(e.detail.scrollLeft)/e.detail.scrollWidth*100
    let index  = e.currentTarget.dataset.index
    this.data.allTaskList[index].x_scroll = x
    this.setData({
      allTaskList: this.data.allTaskList
    })
  },
  lineScroll1(e) {
    let x=(e.detail.scrollLeft)/e.detail.scrollWidth*100
    let index  = e.currentTarget.dataset.index
    this.data.myTaskList[index].x_scroll = x
    this.setData({
      myTaskList: this.data.myTaskList
    })
  },
  // 领取任务
  receive(e) {
    let id = e.currentTarget.dataset.id
    let index  = e.currentTarget.dataset.index
    api.getReaceTask(id).then(res=>{
      if(res.code=="801") {
        wx.showToast({
          title: '领取成功！',
          icon: 'success',
          duration: 2000
        })
        this.data.allTaskList.splice(index,1)
        this.setData({
          allTaskList: this.data.allTaskList
        })
        this.getMyTask()
      }else {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    this.setData({
      date: year + '-' + month
    })
    this.getUserInfo()
    this.getZhexianInfo(this.data.date)
    this.getAllTask()
    this.getMyTask()
    this.getOrderInfo()
    this.getKehuInfo()
    // this.getMonth()
  },
  onPullDownRefresh: function() {
    wx.showLoading({
      title: '加载中...',
    })
    this.getUserInfo()
    this.getAllTask()
    this.getMyTask()
    this.getOrderInfo()
    this.getKehuInfo()
    this.getMonth()
    if( wx.getStorageSync('userInfo').userType===3) {
      this.getPartnerInfo()
      this.getAreaInfo()
    }
    setTimeout(function () {
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 1000)
  },
  // 获取我的任务
  getMyTask() {
    api.getMyTask().then(res=>{
      if(res.code=="801") {
        for(let i=0;i<res.result.length;i++) {
          let x_width = parseInt(656*656/(res.result[i].subtaskList.length*460))
          res.result[i].x_scroll1 = 0;
          res.result[i].x_width = x_width
        }
        this.setData({
          myTaskList: res.result
        })

      }
    })
  },
   // 获取客户信息
   getKehuInfo() {
    api.getKehuInfo().then(res=>{
      if(res.code=="801") {
        this.setData({
          kehuInfo: res.result
        })
      }
    })
  },
   // 获取合伙人管理信息
   getPartnerInfo() {
    api.getPartnerInfo().then(res=>{
      if(res.code=="801") {
        this.setData({
          partnerInfo: res.result
        })
      }
    })
  },
  //  获取折线图
  getZhexianInfo(date) {
    api.getZhexianInfo(date).then(res => {
      if(res.code=="801") {
        
      if (!res.result){
        return;
      }
        lessonMonthArr = []
        lessonCountArr = []
       res.result.forEach(item => {
        let time = item.profitTime.slice(5)
        lessonMonthArr.push(time)
        lessonCountArr.push(item.profitMoney)
       });
        this.init_lessonChart()
      }else if(res.code=="802") {
        wx.showToast({
          title: '未查询到本月数据！',
          icon: 'none',
          duration: 2000
        })
        lessonMonthArr = []
        lessonCountArr = []
        this.init_lessonChart()
      }else {
        wx.showToast({
          title: '获取信息失败！',
          icon: 'none',
          duration: 2000
        })
        lessonMonthArr = []
        lessonCountArr = []
        this.init_lessonChart()
      }
    })
  },
    // 获取区域管理信息
    getAreaInfo() {
      api.getAreaInfo().then(res=>{
        if(res.code=="801") {
          this.setData({
            areaInfo: res.result
          })
        }
      })
    },
  // 获取订单信息
  getOrderInfo() {
    api.getOrderInfo().then(res=>{
      if(res.code=="801") {
        this.setData({
          orderInfo: res.result
        })
      }
    })
  },

  // 修改区域合伙人信息
  setPartnerInfo() {
    let data = {
      id: this.data.id,
      regionScale: Number(this.data.areaScale)
    }
    api.setPartnerInfo(data).then(res => {
      this.setData({
        showPopue: false
      })
      if(res.code=="801") {
        wx.showToast({
          title: '设置成功！',
          icon: 'success',
          duration: 2000
        })
        this.getMonth()
      }else {
        wx.showToast({
          title: '设置失败！',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  // 修改区域比例
  bindAreaScale(e) {
    this.setData({
      areaScale: e.detail.value
    })
  },
  // 获取月收益统计
  getMonth() {
    api.getMonthInfo().then(res=>{
      if(res.code=="801") {
        this.setData({
          monthInfo: res.result
        })
      }
    })
  },
  // 获取全部任务
  getAllTask() {
    api.getAllTask().then(res=>{
      if(res.code=="801") {
        for(let i=0;i<res.result.length;i++) {
          let x_width = parseInt(576*576/(res.result[i].subtaskList.length*460))// 576是滚动条总长度，460是每个子任务的宽度
          res.result[i].x_scroll1 = 0;
          res.result[i].x_width = x_width
        }
        this.setData({
          allTaskList: res.result
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 是否提交表单
  getFormInfo() {
    api.getFormInfo().then(res=> {
      if(res.code=="801") {
        if(res.result.isConfirm===0) {
          this.setData({
            showFitPopue: true
          })
        }else if(res.result.isConfirm===1) {
          this.setData({
            showFitPopue: false   
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getFormInfo()
    this.getMonth()
    if( wx.getStorageSync('userInfo').userType===3) {
      this.getPartnerInfo()
      this.getAreaInfo()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },



  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


})