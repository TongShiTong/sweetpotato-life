// pages/homeMore/index.js
//获取应用实例
import api from '../../utils/api.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    more:'',
    bestSellers: [], //热卖精选
    finished: false, // 是否加载完成
    tips: '加载中...',// 下面这三个都是loading
    show: false,
    animated: true,
    page: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      more: options.more
    })
    this.getHomeMore()
  },

   // 获取热卖精选
   getHomeMore() {
    let self = this
    self.setData({
      page: self.data.page + 1
    })
    let data = {
      classification: self.data.more,
      pageNum: self.data.page,
      pageCount: 10
    }
    api.getHomeMore(data).then(res=>{
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
  // 跳转web页面
  bindWeb(e) {
    let link = e.currentTarget.dataset.link
    wx.navigateTo({
      url: '/pages/webLink/index?link=' + link,
    }) 
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(!this.data.finished) {
      this.setData({
        show: true
      })
      this.getHomeMore()
    }else {

    }

    // this.timer = setInterval(() => {
     
    // }, 2000)
  },
  // 卖商品
  buyGood(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/ranking/index?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },
  onUnload() {
    // clearInterval(this.timer)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})