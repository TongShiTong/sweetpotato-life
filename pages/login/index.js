// pages/login/index.js
import api from '../../utils/api.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: false,
    back: false,
    type: ''
  },
  // 跳转web页面
  bindWeb(e) {
    let link = e.currentTarget.dataset.link
    wx.navigateTo({
      url: '/pages/webLink/index?link=' + link,
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    // app.userInfoReadyCallback = res => {
    //   console.log(11113333,res)
    //   this.setData({
    //     userInfo: res.userInfo,
    //     hasUserInfo: true
    //   })
    // }
    this.setData({
      type: options.type
    })
    if(options.back==1) {
      this.setData({
        start: true,
        back: true
      })
    }else {
      wx.login({
        success: res => {
          // if (self.userCodeCallback) {
          //   self.userCodeCallback(res)
          // }
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          this.setData({
            code: res.code,
          })
        }
      })
    }
    // app.userCodeCallback = res => {
    //   this.setData({
    //     code: res.code,
    //     start: true
    //   })
    // }
  },
  // 微信手机号授权
  getPhoneNumber(e) { 
     // 登录
     let self = this
    if(e.detail.errMsg==="getPhoneNumber:fail user deny") {
      wx.showToast({
        title: '登录取消！',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    let datas = {
      code: this.data.code,
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv
    }
    // 返回个人信息及状态
    api.Login(datas).then( data => {
      if(data.code=="801"){
        // console.log(222,data)
        if(!data.result.User.authorize) {
          if(!data.result.User.state) {
            if(self.data.type=="1") {
              wx.redirectTo({
                url: '/pages/partner/index?type=1',
              })
            }else {
              wx.redirectTo({
                url: '/pages/partner/index?type=0',
              })
            }
          }else {
            wx.redirectTo({
              url: '/pages/status/index?status=' + data.result.User.state,
            })
          }
        }else {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        wx.setStorageSync('token', data.result.token)
        wx.setStorageSync('userInfo', data.result.User)
        app.globalData.userInfo = data.result.User
        app.globalData.token = data.result.token
      }
    }).catch( err => {
      wx.showToast({
        title: '网络错误，请重新登录！',
        icon: 'none',
        duration: 2000
      })
    })
  },
  // 微信信息昵称授权

  confirm(e) {
    wx.getUserInfo({
      lang: "zh_CN",
      success(res) {
        let datas = {
          avatarUrl: res.userInfo.avatarUrl,
          city: res.userInfo.city,
          country: res.userInfo.country,
          gender: res.userInfo.gender,
          nickName: res.userInfo.nickName,
          province: res.userInfo.province
        }
        api.getAuth(datas).then(data=>{
          if(data.code=="801") {
            app.globalData.userInfo = data.result
            wx.setStorageSync('userInfo', data.result)
            wx.switchTab({
              url: '/pages/index/index',
            })
          }else {
            wx.showToast({
              title: data.message,
              icon: 'none',
              duration: 2000
            })
          }
        }).catch(err=>{
          wx.showToast({
            title: '网络错误，请检查网络！',
            icon: 'none',
            duration: 2000
          })
        })
      }
    })
  },
})