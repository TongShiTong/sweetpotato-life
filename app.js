//app.js
import api from './utils/api.js'
App({
  onLaunch: function () {
    // 展示本地存储能力
    let self = this
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.getSystemInfo({
    //   success: (result) => {
    //     console.log(1111,result)
    //     self.globalData.topHeight = result.statusBarHeight
    //   },
    // })

    // 判断用户是否登录，及用户状态，及活动是否开放
    // let token = wx.getStorageSync('token');
    // this.globalData.token = token;
    // if(token) {
    //   api.getInfo().then(res=>{
    //     // console.log(111222,res)
    //     if(res.code=="801") {
    //       self.globalData.userInfo = res.result
    //       wx.setStorageSync('userInfo', res.result)
    //       let userInfo = res.result
    //       console.log(userInfo.authorize)
    //       if(!userInfo.authorize) {
    //         if(!userInfo.state) {
    //           wx.redirectTo({
    //             url: '/pages/recruit/index',
    //           })
    //         }else {
    //           wx.redirectTo({
    //             url: '/pages/status/index?status=' + userInfo.state,
    //           })
    //         }
    //       }else {
    //         console.log(2)
    //         wx.switchTab({
    //           url: '/pages/index/index',
    //         })
    //       }
    //     }else {
    //       wx.setStorageSync('token', "")
    //       wx.login({
    //         success: res => {
    //           if (self.userCodeCallback) {
    //             self.userCodeCallback(res)
    //           }
    //           // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //         }
    //       })
    //     }
    //   })
    // }else {
    //   wx.login({
    //     success: res => {
    //       if (self.userCodeCallback) {
    //         self.userCodeCallback(res)
    //       }
    //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     }
    //   })
    // }
  },
  globalData: {
    userInfo: {
      phone:''
    },
    token: null,
    parameter: null
    // topHeight: null
  }
})