//index.js
//获取应用实例
import api from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [], //banner图
    bestSellers: [], //热卖精选
    weekly: {},// 每周主推
    region: {}, // 区域特返
    cloud: {}, // 云超直供
    currentIndex: 0,

    finished: false, // 是否加载完成
    tips: '加载中...',// 下面这三个都是loading
    show: false,
    animated: true,
    page: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  // 跳转web页面
  bindWeb(e) {
    let link = e.currentTarget.dataset.link
    wx.navigateTo({
      url: '/pages/webLink/index?link=' + link,
    }) 
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
    this.getData()
  },
  onPullDownRefresh: function() {
    wx.showLoading({
      title: '加载中...',
    })
    
    // wx.setBackgroundColor({
    //   backgroundColor: '#FF5704', // 窗口的背景色为红色
    //   backgroundColorTop: '#FF5704' //兼容ios
    // })
    this.setData({ //初始化热卖精选商品
      bestSellers: [],
      page: 0,
      finished: false, // 是否加载完成
      tips: '加载中...',// 下面这三个都是loading
      show: false,
      animated: true,
    })
    this.getData()
  },
  navZhuan() {
    wx.navigateToMiniProgram({
      appId: 'wxe5c4a2a98826ffcf',
      path: 'page/index/index',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
        console.log(111222,res)
      },
      fail(err) {
        console.log(111333,err)
      }
    })
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
  // 获取首页数据
  getData() {
    let self = this
    api.getIndexData().then(res=>{
      if(res.code=="801") {
        self.setData({
          imgUrls: res.result.classification_1.str,
          weekly: res.result.classification_2,
          region: res.result.classification_3,
          cloud: res.result.classification_4
        })
        self.getSellers()
      }else {
        wx.showToast({
          title: res.message,
        })
        self.getSellers()
      }
    })
  },
  // 买商品
  buyGood(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/ranking/index?id=' + id
    })
  },
  // 获取热卖精选
  getSellers() {
    let self = this
    self.setData({
      page: self.data.page + 1
    })
    let data = {
      pageNum: self.data.page,
      pageCount: 5
    }
    api.getBastSellers(data).then(res=>{
      wx.hideLoading()
      wx.stopPullDownRefresh()
      if(res.code=="801") {
        self.setData({
          bestSellers: self.data.bestSellers.concat(res.result.list)
        })
        if(self.data.bestSellers.length<res.result.total) {
          self.setData({
            finished: false,
            show: true
          })
        }else {
          self.setData({
            finished: true,
            show: false
          })
        }
      }else {
        self.setData({
          finished: true,
          show: false
        })
      }
    }).catch(err=>{
      wx.hideLoading()
      wx.stopPullDownRefresh()
      self.setData({
        finished: true,
        show: false
      })
      wx.showToast({
        icon: 'none',
        title: '网络链接错误！',
      })
    })
  },
  // 直接引入http测试的一个方法
  // test() {
  //   http.post('/hand/shop-conf-api/get-info').then(res => {
  //     console.log(4444,res)
  //   })
  // }
  onReachBottom(e) {
    if(!this.data.finished) {
      this.setData({
        show: true
      })
      this.getSellers()
    }else {

    }
  }
})
