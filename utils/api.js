import { http } from './util.js'

export default {
  // 登录
  Login(data) {
    return http.post('user/loginByWeixin', data)
  },
  // 获取个人状态
  getStatus() {
    return
  },

  // 获取首页配置
  getIndexData() {
    return http.post('hotcommodity/getfirstPageConfiguration',{})
  },
  // 获取首页热卖精选
  getBastSellers(data) {
    return http.get('hotcommodity/getCommodity',data)
  },

  // 提交报名信息
  signSubmit(data) {
    return http.post('Inscription/addInscription', data)
  },

  // 提交收款信息
  //  signSubmit(data) {
  //   return http.post('Inscription/addInscription', data)
  // },


  // 报名入口开关
  upSwitch() {
    return http.get('Inscription/selectSwitch',{})
  },
  // 获取首页信息
  getHomeInfo() {
    return
  },
  // 获取个人信息
  getInfo() {
    return http.get('user/info',{
    })
  },

  // 获取全部任务信息
  getAllTask() {
    return http.get('tasksequity/missionCenter',{
    })
  },
   // 获取我的任务信息
   getMyTask() {
    return http.get('tasksequity/getTask',{
    })
  },
  // 获取客户管理信息
  getKehuInfo() {
    return http.get('bigRegimentalCommander/selectAppUserByUserIdentity',{
    })
  },
   // 获取客户管理信息
   getOrderInfo() {
    return http.get('bigRegimentalCommander/selectOrderCount',{
    })
  },

   // 获取合伙人管理信息
   getPartnerInfo() {
    return http.get('tasksequity/partnerManagement',{
    })
  },

    // 获取折线图信息
  getZhexianInfo(date) {
    return http.get('bigRegimentalCommander/getProfitList',{month:date
    })
  },

  // 修改区域合伙人返利设置
  setPartnerInfo(data) {
  return http.get('tasksequity/modifyAreaValue',data)
},

  // 获取区域管理信息
  getAreaInfo() {
    return http.get('tasksequity/regionAdministration',{
    })
  },

    // 获取月收益统计信息
    getMonthInfo() {
      return http.get('bigRegimentalCommander/selectProfitByAccount',{
      })
    },
   // 领取任务信息
   getReaceTask(id) {
    return http.get('tasksequity/collectTask',{ taskId:id})
  },
  getAuth(data) {
    return http.post('user/updateUserById',data)
  },
  // 查询是否提交过表单信息
  getFormInfo() {
    return http.get('bankInfo/getMonthProfit',{
    })
  },

  // 查询是否提交过表单信息
  submitInfo(data) {
    return http.post('/bankInfo/confirmMonthProfit',data)
  },
  // 获取银行
  getBackInfo(card) {
    return http.get('bankInfo/getReceivingBank',{
      bankAccount: card
    })
  },
  // 获取收益排行
  getBackInfo(card) {
    return http.get('bankInfo/getReceivingBank',{
      bankAccount: card
    })
  },

  sortInfo(id) {
    return http.get('bigRegimentalCommander/getItemProfitRank',{itemId:id})
  },

  // 获取小程序码
  getWxCode(data) {
    return http.get('weixinqrcode/getWeiXinQrCode2',data)
  },

  // 获取商品详情
  getGoodDetail(id) {
    return http.get('weixinqrcode/getItem',{itemId: id})
  },

   // 获取首页更多
   getHomeMore(data) {
    return http.get('hotcommodity/pageMore',data)
  }
 
}