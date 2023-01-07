// 注册小程序示例
App({ //全局共享的单例对象

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('onLaunch===', options)

    //发送网络请求

    //获取用户信息
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow===', options)
    //1.判断小程序的进入场景
    switch (options.scene) {
      case 1001:
        console.log()
        break;
      case 1005:
        break;
      default:
    }
    // 2.获取用户信息，并传递给服务器
    wx.getUserInfo({ //有可能会过期
        success(res){
            console.log('getUserInfo==',res)
        }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  //全局数据,可进行共享
  globalData:{
     name:"coderYcj",
     age:26
  }
})