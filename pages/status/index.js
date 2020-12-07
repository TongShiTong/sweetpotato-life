// pages/status/index.js
import api from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: null,
    pupoe: true,
    switch: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      status: options.status
    })

    api.upSwitch().then(res=>{
      this.setData({
        switch:res.result.enroll_state
      })
    })
    
  },
  onPullDownRefresh: function() {
    console.log(11)
    this.isGone()
  },
  onShow: function () {
    this.isGone()
  },
  again() {
    wx.redirectTo({
      url: '/pages/recruit/index?again=1',
    })
  },
  // 关闭弹窗
  close() {
    this.setData({
      pupoe: false
    })
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 确认授权页面
  confirm() {
    wx.navigateTo({
      url: '/pages/login/index?back=1',
    })
  },
  
  // 判断是否审核通过
  isGone() {
    api.getInfo().then(res=>{
      if(res.code=="801") {
        wx.setStorageSync('userInfo', res.result)
        let userInfo = res.result
        this.setData({
          uesr: userInfo,
          status: userInfo.state
        })
      }
    })
  }
})