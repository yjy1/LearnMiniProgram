// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },
  handleNav(){
    console.log('aaaaaaa')
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  }, 
})