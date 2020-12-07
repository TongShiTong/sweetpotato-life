// pages/profit/index.js
import api from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // showPopue: false,
    allInfo: {
      bankInfo: {
        userName: '',
        identityCode:'',
        bankAccount:'',
        receivingBank:'',
        bankName:'',
      },
      commissionMoney: null,
      createTime: "",
      id: null,
      isConfirm: null,
      profitMonth: "",
      regionMoney: null,
      taskMoney: null,
      updateTime: "",
      userId: "",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFormInfo()
  },
  // 是否提交表单
  getFormInfo() {
    api.getFormInfo().then(res=> {
      if(res.code=="801") {
          this.setData({
            allInfo: res.result
          })
      }
    })
  },
  // 取消弹框
  // close() {
  //   this.setData({
  //     showPopue: false
  //   })
  // },
  setFanli() {
    let self = this
    wx.showModal({
      title: '提示',
      content: '请确认提交收款信息！',
      success (res) {
        if (res.confirm) {

          var idcardReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
          if(!idcardReg.test(self.data.allInfo.bankInfo.identityCode)) {
            wx.showToast({
              title: '请输入正确的身份证号！',
              icon: 'none',
              duration: 2000
            })
            return
          }
          
          api.submitInfo(self.data.allInfo).then(res => {
            if(res.code=="801") {
              wx.showToast({
                title: '提交信息成功！',
                icon: 'success',
                duration: 2000,
                success: function() {
                  wx.navigateBack({
                    delta: 1,
                  })
                }
              })
            }else {
              wx.showToast({
                title: res.message,
                icon: 'none',
                duration: 2000
              })
            }
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '取消提交',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  // 绑定姓名
  bindName:function(e) {
    this.setData({'allInfo.bankInfo.userName':e.detail.value});
  },
  // 绑定身份信息
  bindIdCard:function(e){
    this.setData({'allInfo.bankInfo.identityCode':e.detail.value});
  },
  // 绑定银行卡信息
  bindBankCard:function(e){
    this.setData({'allInfo.bankInfo.bankAccount':e.detail.value});
  },
  BackInfo(e) {
    api.getBackInfo(this.data.allInfo.bankInfo.bankAccount).then(res=>{
      if(res.code=="801") {
        this.setData({'allInfo.bankInfo.receivingBank':res.result.receivingBank});
      }else {
        wx.showToast({
          title: '请输入正确的银行卡号！',
          icon: 'none'
        })
      }
    })
  },
  // 收款银行
  bindBank:function(e) {
    this.setData({'allInfo.bankInfo.receivingBank':e.detail.value});
  },
  // 开户收款银行
  bindkhBank:function(e) {
    this.setData({'allInfo.bankInfo.bankName':e.detail.value});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})