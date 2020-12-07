const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const baseUrl = "https://life.mengdigua.cn/"
// const baseUrl = "http://192.168.5.7:9092/"
// const baseUrl = "http://192.168.5.46:9092/"

// 封装一个请求数据的方法
const http = {
  http(url,method,data){
    return new Promise((resolve,reject) => {
      let token = wx.getStorageSync('token') 
      let header = {
        'content-type': 'application/json',
        'Authorization': token
      }
      // if(token){
      //   header.token = token
      // }
      wx.request({
        url: baseUrl + url,
        data,
        method,
        header,
        success(res){
          // if(res.header.Token){
          //   wx.setStorageSync('token', res.header.Token)
          // }
          resolve(res.data)
        },
        fail(err){
          reject(err)
        }
      })
    }) 
  },
  // 定义get方法
  get(url,data){
    return this.http(url,'GET',data)
  },
  // 定义post方法
  post(url, data) {
    return this.http(url, 'POST', data)
  }
}

const login = () => {
  wx.login({
    success(res){
      fetch.post('/login',{
        code:res.code,
        appid:"wx07e04f2e63c2e677",
        secret:"058e0e2ccd118c3ccbca49e5a515af5a"
      }).then(res => {
        console.log(res)
      })
    }
  })
}
// const time = () => {
//   let date= +new Date()

// }

module.exports = {
  formatTime: formatTime,
  http: http,
  login: login
}
