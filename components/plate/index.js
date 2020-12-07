// components/theSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: Array,
    monograph: {
      type: Boolean,
      value: false
    },
    region: {
      type: Boolean,
      value: false
    },
    indexData: {
      type: Object
    },
    more: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e) {
      this.setData({
        currentIndex: e.detail.current
      });
    },
    navZhuan(e) {
      console.log(e)
      let id = e.currentTarget.dataset.id
      let shop_id = e.currentTarget.dataset.shop_id
      wx.navigateToMiniProgram({
        appId: 'wxe5c4a2a98826ffcf',
        path: 'pages/goodDetail/goodDetail?id='+ id +'&shop_id=' + shop_id,
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
    bindWeb(e) {
      let link = e.currentTarget.dataset.link
      wx.navigateTo({
        url: '/pages/swiperWeb/index?link=' + link,
      }) 
    },
    getMore() {
      wx.navigateTo({
        url: '/pages/homeMore/index?more=' + this.properties.more,
      }) 
    }
  }
});
