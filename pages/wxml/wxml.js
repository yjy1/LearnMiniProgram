// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好，效果呈现",
    firstName:'kobe',
    lastName:'bryant',
    age:13,
    // time:new Date().toLocaleString()
    time:"",
    isActive:true,
    isShow:true,
    score:35,
    isHidden:true,
    isHidden2:true,
    isShowBlock:true,
    movies:['星际穿越','盗梦空间','阿凡达','钢铁侠'],
    nums:[
      [1,3,5,7,9],
      [21,23,25,27,29],
      [31,33,35,37,39],
      [41,43,45,47,49],
    ],
    letters:['a','b','c','d'],
  },
  handleBtnClick(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleIsShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  num2Fixed(value){
    return value.toFixed(2)
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // setInterval(() => { //定时器，setTimeOut不起作用
    //   console.log('setInterval')
    //   this.setData({
    //     time:new Date().toLocaleString()
    //   })
    // }, 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})