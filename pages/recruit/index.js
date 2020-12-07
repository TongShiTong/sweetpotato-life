// pages/recruit/index.js
import api from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch: '',
    show: false,
    again: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.upSwitch().then(res=>{
      // console.log(111,res)
      if(res.code=="801") {
        this.setData({
          switch:res.result.enroll_state
        })
      }else {
        this.setData({
          switch:0
        })
      }
    }).catch(err=>{
      this.setData({
        switch:0
      })
    })
    if(options.again==1) {
      this.setData({
        show: true
      })
    }else {
      this.isLogin()
    }
  },
  // 判断是否登录
  isLogin() {
     // 判断用户是否登录，及用户状态，及活动是否开放
    let token = wx.getStorageSync('token');
    let self = this
    if(token) {
      api.getInfo().then(res=>{
        // console.log(111222,res)
        if(res.code=="801") {
          wx.setStorageSync('userInfo', res.result)
          let userInfo = res.result
          if(!userInfo.authorize) {
            if(!userInfo.state) {
              // if(!userInfo.state || userInfo.state==2) {
              // wx.redirectTo({
              //   url: '/pages/recruit/index',
              // })
              self.setData({
                show: true
              })
            }else {
              wx.redirectTo({
                url: '/pages/status/index?status=' + userInfo.state,
              })
            }
          }else {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        }else {
          wx.setStorageSync('token', "")
          self.setData({
            show: true
          })
        }
      })
    }else {
      // wx.login({
      //   success: res => {
      //     if (self.userCodeCallback) {
      //       self.userCodeCallback(res)
      //     }
      //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
      //   }
      // })
      self.setData({
        show: true
      })
    }
  },
  bindJoin(e) {
    let type = e.currentTarget.dataset.type
    
    let token = wx.getStorageSync('token');
    if(token) {
      wx.navigateTo({
        url: '/pages/partner/index?back=1&type=' + type,
      })
    }else {
      wx.navigateTo({
        url: '/pages/login/index?type=' + type,
      })
    }
  },
  
})