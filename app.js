App({
  //生命周期函数,后台存活2个小时
  //小程序初始化完成时会执行的声明周期函数
  onLaunch(){
    console.log('小程序初始化完成了')
    // wx.request({
    //   url: 'url',
    // })
    // 异步调用
    wx.getUserInfo({
      success:function(res){
        console.log('getUserInfo==',res)
      }
    })
    //模拟出错
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // }, 3000);
  },
  // 小程序界面显示出来之后会执行的函数 
  onShow(){
    console.log('onShow==')
  },
  // 界面被隐藏时执行
  onHide(){
    console.log('onHide==')
  },
  // 发生错误时执行
  onError(){
    console.log('onError==')
  }
})