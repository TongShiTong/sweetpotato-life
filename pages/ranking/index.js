
// import Poster from '../../components/poster/poster';
import api from '../../utils/api.js'

// const posterConfig = {
//     jdConfig: {
//         width: 750,
//         height: 1334,
//         backgroundColor: '#fff',
//         debug: false,
//         pixelRatio: 1,
//         blocks: [
//             {
//                 width: 690,
//                 height: 808,
//                 x: 30,
//                 y: 183,
//                 borderWidth: 2,
//                 borderColor: '#f0c2a0',
//                 borderRadius: 20,
//             },
//             {
//                 width: 634,
//                 height: 74,
//                 x: 59,
//                 y: 770,
//                 backgroundColor: '#fff',
//                 opacity: 0.5,
//                 zIndex: 100,
//             },
//         ],
//         texts: [
//             {
//                 x: 113,
//                 y: 61,
//                 baseLine: 'middle',
//                 text: '伟仔',
//                 fontSize: 32,
//                 color: '#8d8d8d',
//             },
//             {
//                 x: 30,
//                 y: 113,
//                 baseLine: 'top',
//                 text: '发现一个好物，推荐给你呀',
//                 fontSize: 38,
//                 color: '#080808',
//             },
//             {
//                 x: 92,
//                 y: 810,
//                 fontSize: 38,
//                 baseLine: 'middle',
//                 text: '标题标题标题标题标题标题标题标题标题',
//                 width: 570,
//                 lineNum: 1,
//                 color: '#8d8d8d',
//                 zIndex: 200,
//             },
//             {
//                 x: 59,
//                 y: 895,
//                 baseLine: 'middle',
//                 text: [
//                     {
//                         text: '2人拼',
//                         fontSize: 28,
//                         color: '#ec1731',
//                     },
//                     {
//                         text: '¥99',
//                         fontSize: 36,
//                         color: '#ec1731',
//                         marginLeft: 30,
//                     }
//                 ]
//             },
//             {
//                 x: 522,
//                 y: 895,
//                 baseLine: 'middle',
//                 text: '已拼2件',
//                 fontSize: 28,
//                 color: '#929292',
//             },
//             {
//                 x: 59,
//                 y: 945,
//                 baseLine: 'middle',
//                 text: [
//                     {
//                         text: '商家发货&售后',
//                         fontSize: 28,
//                         color: '#929292',
//                     },
//                     {
//                         text: '七天退货',
//                         fontSize: 28,
//                         color: '#929292',
//                         marginLeft: 50,
//                     },
//                     {
//                         text: '运费险',
//                         fontSize: 28,
//                         color: '#929292',
//                         marginLeft: 50,
//                     },
//                 ]
//             },
//             {
//                 x: 360,
//                 y: 1065,
//                 baseLine: 'top',
//                 text: '长按识别小程序码',
//                 fontSize: 38,
//                 color: '#080808',
//             },
//             {
//                 x: 360,
//                 y: 1123,
//                 baseLine: 'top',
//                 text: '超值好货一起拼',
//                 fontSize: 28,
//                 color: '#929292',
//             },
//         ],
//         images: [
//             {
//                 width: 62,
//                 height: 62,
//                 x: 30,
//                 y: 30,
//                 borderRadius: 62,
//                 url: 'https://static.fotor.com.cn/assets/res/pic/454d3884-b1d1-4059-a08b-18427f93c8eb.jpg?x-oss-process=image/resize,lfit,h_1200,w_1200/format,src',
//             },
//             {
//                 width: 634,
//                 height: 634,
//                 x: 59,
//                 y: 210,
//                 url: 'https://static.fotor.com.cn/assets/res/pic/454d3884-b1d1-4059-a08b-18427f93c8eb.jpg?x-oss-process=image/resize,lfit,h_1200,w_1200/format,src',
//             },
//             {
//                 width: 220,
//                 height: 220,
//                 x: 92,
//                 y: 1020,
//                 url: 'https://cdn.blog.makergyt.com/mini/assets/qrcode.png',
//             },
//             {
//                 width: 750,
//                 height: 90,
//                 x: 0,
//                 y: 1244,
//                 url: 'https://cdn.blog.makergyt.com/mini/assets/qrcode.png',
//             }
//         ]

//     },
//     demoConfig: {
//         width: 750,
//         height: 1000,
//         backgroundColor: '#fff',
//         debug: false,
//         blocks: [
//             {
//                 x: 0,
//                 y: 10,
//                 width: 750, // 如果内部有文字，由文字宽度和内边距决定
//                 height: 120,
//                 paddingLeft: 0,
//                 paddingRight: 0,
//                 borderWidth: 10,
//                 borderColor: 'red',
//                 backgroundColor: 'blue',
//                 borderRadius: 40,
//                 text: {
//                     text: [
//                         {
//                             text: '金额¥ 1.00',
//                             fontSize: 80,
//                             color: 'yellow',
//                             opacity: 1,
//                             marginLeft: 50,
//                             marginRight: 10,
//                         },
//                         {
//                             text: '金额¥ 1.00',
//                             fontSize: 20,
//                             color: 'yellow',
//                             opacity: 1,
//                             marginLeft: 10,
//                             textDecoration: 'line-through',
//                         },
//                     ],
//                     baseLine: 'middle',
//                 },
//             }
//         ],
//         texts: [
//             {
//                 x: 0,
//                 y: 180,
//                 text: [
//                     {
//                         text: '长标题长标题长标题长标题长标题长标题长标题长标题长标题',
//                         fontSize: 40,
//                         color: 'red',
//                         opacity: 1,
//                         marginLeft: 0,
//                         marginRight: 10,
//                         width: 200,
//                         lineHeight: 40,
//                         lineNum: 2,
//                     },
//                     {
//                         text: '原价¥ 1.00',
//                         fontSize: 40,
//                         color: 'blue',
//                         opacity: 1,
//                         marginLeft: 10,
//                         textDecoration: 'line-through',
//                     },
//                 ],
//                 baseLine: 'middle',
//             },
//             {
//                 x: 10,
//                 y: 330,
//                 text: '金额¥ 1.00',
//                 fontSize: 80,
//                 color: 'blue',
//                 opacity: 1,
//                 baseLine: 'middle',
//                 textDecoration: 'line-through',
//             },
//         ],
//         images: [
//             {
//                 url: 'https://cdn.blog.makergyt.com/mini/assets/qrcode.png',
//                 width: 300,
//                 height: 300,
//                 y: 450,
//                 x: 0,
//                 // borderRadius: 150,
//                 // borderWidth: 10,
//                 // borderColor: 'red',
//             },
//             {
//                 url: 'https://cdn.blog.makergyt.com/mini/assets/qrcode.png',
//                 width: 100,
//                 height: 100,
//                 y: 450,
//                 x: 400,
//                 borderRadius: 100,
//                 borderWidth: 10,
//             },
//         ],
//         lines: [
//             {
//                 startY: 800,
//                 startX: 10,
//                 endX: 300,
//                 endY: 800,
//                 width: 5,
//                 color: 'red',
//             }
//         ]

//     }
// }
Page({
    data: {
        // posterConfig: posterConfig.jdConfig,
        // profitList: {},
        showVideo:false,
        goodDetail:{},
        img: '',
        hasGoods: true, // 是否有商品
        userInfo: wx.getStorageSync('userInfo')
    },
    onLoad(option) {
      this.setData({
        id: option.id
      })
      this.getGoodDetail(option.id)
      this.sortInfo()
      this.getWxCode()
    },

    // 跳转web页面
    bindWeb(e) {
      let link = e.currentTarget.dataset.link
      wx.navigateTo({
        url: '/pages/webLink/index?link=' + link,
      }) 
    },
    // onReady() {
    //   this.save = this.selectComponent("#getPoster");
    // },
    // 获取小程序码
    getWxCode() {
      let data = {
        scene: 'item_id=' + this.data.id + '&shop_id=' + this.data.userInfo.userIdentity,
        page: 'pages/goodDetail/goodDetail'
      }
      api.getWxCode(data).then( res=> {
        if(res.code == "801") {
          this.setData({
            img: res.result
          })
        }
      })
    },
    // 获取商品详情
    getGoodDetail(id) {
      api.getGoodDetail(id).then( res=> {
        if(res.code == "801") {
          this.setData({
            goodDetail: res.result
          })
        }else {
          this.setData({
            hasGoods: false
          })
          wx.showToast({
            icon:'none',
            title: '未查到此商品！',
          })
        }
      })
    },
    // 保存二维码
    // bindJoin() {
    //   this.save.saveShareImg()
    // },
    bindJoin() {
      // let self = this
      // if(!this.data.hasGoods) {
      //   wx.showToast({
      //     icon:'none',
      //     title: '未查到此商品！',
      //   })
      //   return
      // }
      // if(!self.data.img) {
      //   return
      // }
      // wx.showLoading({
      //   title: '保存中...', 
      //   mask: true,
      // });
      // wx.downloadFile({
      //   url: self.data.img,
      //   success: function(res) {
      //     wx.hideLoading();
      //     if (res.statusCode === 200) {
      //       console.log(114,res)
      //       let img = res.tempFilePath;
      //       wx.saveImageToPhotosAlbum({
      //         filePath: img,
      //         success(res) {
      //           wx.showModal({
      //             content: '图片已保存到相册，赶紧晒一下吧~',
      //             showCancel: false,
      //             confirmText: '好的',
      //             confirmColor: '#333',
      //             success: function(res) {
      //               if (res.confirm) {}
      //             },
      //             fail: function(res) {}
      //           })
      //         },
      //         fail(res) {
      //           wx.showToast({
      //             title: '保存失败！',
      //             icon: 'none',
      //             duration: 2000
      //           });
      //         }
      //       });
      //     }
      //   }
      // });
      if(!this.data.hasGoods) {
        wx.showToast({
          icon:'none',
          title: '未查到此商品！',
        })
        return
      }
      this.setData({ showVideo: false })
      this.selectComponent('#getPoster').getAvaterInfo(1)
    },
    // 获取收益排行
    sortInfo() {
      api.sortInfo(this.data.id).then(res=> {
        if(res.code=="801") {
          this.setData({
            profitList: res.result
          })
        }
      })
    },
    // onPosterSuccess(e) {
    //     // const { detail } = e;
    //     // wx.previewImage({
    //     //     current: detail,
    //     //     urls: [detail]
    //     // })
    //     this.setData({
    //       url: e.detail
    //     })
    // },
    // onPosterFail(err) {
    //     console.error(err);
    // },

    /**
     * 异步生成海报
     */
    // onCreatePoster() {
    // 	this.setData({ posterConfig: posterConfig.demoConfig }, () => {
    //     	Poster.create(true);    // 入参：true为抹掉重新生成
    // 	});
    // },

    // onCreateOtherPoster() {
    //     posterConfig.jdConfig.images[3].url = 'https://static.fotor.com.cn/assets/res/pic/454d3884-b1d1-4059-a08b-18427f93c8eb.jpg?x-oss-process=image/resize,lfit,h_1200,w_1200/format,src'
    // 	this.setData({ posterConfig: posterConfig.jdConfig }, () => {
    //     	Poster.create(true);    // 入参：true为抹掉重新生成 
    // 	});
    // },

    //调用子组件的方法
  getSharePoster: function () {
    if(!this.data.hasGoods) {
      wx.showToast({
        icon:'none',
        title: '未查到此商品！',
      })
      return
    }
    this.setData({ showVideo: false })
    this.selectComponent('#getPoster').getAvaterInfo()
  },

  myEventListener: function (e) {
    this.setData({ showVideo: true })
  },
})
