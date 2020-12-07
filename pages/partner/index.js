// pages/partner/index.js
import api from '../../utils/api.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    phone: '',
    name:"",
    weixin:'',
    desc:'',
    isshow: false,
    back: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.back==1) {
      this.setData({
        back: true
      })
    }
    this.setData({
      type: options.type,
      phone: wx.getStorageSync('userInfo').phone
    })
  },
  // 绑定姓名
  bindName:function(e) {
    this.setData({name:e.detail.value});
  },
  // 绑定手机号
  bindPhone:function(e){
    this.setData({phone:e.detail.value});
  },

   // 绑定微信号
   bindWx:function(e){
    this.setData({weixin:e.detail.value});
  },
  // 绑定描述简介
  bindDesc:function(e){
    this.setData({desc:e.detail.value});
  },

  submit() {
    let self = this;
    var regexpphone = /^1(2|3|4|5|6|7|8|9)\d{9}$/;
    if (!self.data.name) {
      wx.showToast({
        title: '请输入真实姓名！',
        icon: 'none',
        duration: 2000
      })
      return
    } 
    if (!regexpphone.test(self.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号码！',
        icon: 'none',
        duration: 2000
      })
      return
    } 
    if (!self.data.weixin) {
      wx.showToast({
        title: '请输入微信号！',
        icon: 'none',
        duration: 2000
      })
      return
    } 
    if(this.data.isshow) {
      return
    }
    this.setData({
      isshow:true
    })
    let data ={
      applicationType: this.data.type,
      nom: this.data.name,
      telephone: this.data.phone,
      wxCode: this.data.weixin,
      otherInformation: this.data.desc
    }
    api.signSubmit(data).then( res => {
      self.setData({
        isshow:false
      })
      if(res.code=="801") {
        wx.redirectTo({
          url: '/pages/status/index?status=1'
        })
      }else {
        wx.showToast({
          icon:'none',
          title: res.message,
        })
      }
    }).catch(err=>{
      self.setData({
        isshow:false
      })
    })
  },

})