// components/navigation/index.js
const app = getApp()
Component({

  /**
   * 页面的初始数据
   */
  // options: {
  //   addGlobalClass: true  //使用全局app.wxss里的样式
  // },
  properties:{
    title: {
      type: String,
      value:''
    },
    back: {
      type: Boolean,
      value: false
    },
    bgcolor: {
      type: String,
      value: '#ffffff'
    }
  },
  data: {
    statusBarHeight: app.globalData.topHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  attached() {
    let self = this
    wx.getSystemInfo({
      success: (result) => {
        self.setData({
          statusBarHeight: result.statusBarHeight
        })
      },
    })
  },
  methods:{
    // 写组件方法
    back() {
      wx.navigateBack({
        delta: 1,
      })
    }
  },
})