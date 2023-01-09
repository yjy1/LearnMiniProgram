const TOKEN = 'token'

App({
  globalData: {
    token: ''
  },
  onLaunch() {
    // 1.先从缓存中取出token
    const tokenS = wx.getStorageSync(TOKEN)
    if (tokenS && tokenS.length != 0 && tokenS != 'undefined') {
      // console.log('您已登录', tokenS)
      // 判断token是否已过期
      this.check_token(tokenS)
    } else {
      this.login()
    }
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          console.log('token有效---',res)
          this.globalData.token = token
        }
      },
      fail:(err)=>{
        console.log('check_token---',err)
      }
    })
  },
  login() {
    // 登录操作
    wx.login({
      // code有效期为五分钟
      success: (res) => {
        // 获取code
        const code = res.code
        console.log(res)

        // 将code发送到服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            console.log('登录结果---', res)
            // 取出token
            const token = res.data.token
            this.globalData.token = token
            console.log('您未登录，正在存储token', this.globalData.token)

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      },
    })
  }
})