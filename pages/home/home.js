// const { ConeShapeEmitter } = require("WechatXrFrame/components/emitter")

// 获取App()产生的实例对象
// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // -------------------2.初始化数据-----------------
  data: {
    message:'哈哈哈',
    list:[]
  },
  // --------------------1.监听页面的生命周期--------------------
  // 页面被加载出来
  onLoad() {
    console.log('home--onload')
    wx.request({
      url: 'http://localhost:8888/userlist',
      success: (res) => {
        console.log('home res--', res)
        const resData = res.data
        this.setData({
          list:resData
        })
      }
    })
  },
  // 页面初次渲染完成
  onReady() {
    console.log('home--onReady')
  },
  // 页面显示出来时
  onShow() {
    console.log('home--onShow')
  },
  // 当页面隐藏起来时
  onHide() {
    console.log('home--onHide')
  },
  onUnload() {
    console.log('home--onUnload')
  },

  // -------------------3.监听wxml中的一些相关事件----------------
  // 获取用户信息
  handleGetUserInfo(event) { 
    console.log('handleGetUserInfo--', event)
  },
  handleViewClick(){
    console.log('home--handleViewClick')
  },

    // -------------------4.监听其他事件----------------
    // 监听页面的滚动
    onPageScroll(obj){
      // console.log('onPageScroll--',obj)
    },
    // 监听页面滚动到底部
    onReachBottom( ){
      console.log('onReachBottom--' )
    },
    onPullDownRefresh(){
      console.log('onPullDownRefresh--' )
    }
})