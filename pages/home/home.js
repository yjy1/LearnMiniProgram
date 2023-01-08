// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBtnClick(){
    console.log('按钮被点击了')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap---------')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },
  handleEventClick(event){
    console.log('handleEventClick-------',event)
  },
  handleEventEnd(event){
    console.log('handleEventEnd-------',event)
  },
  handleInner(event){
    console.log('handleInner-------',event)
  },
  handleOuter(event){
    console.log('handleOuter-------',event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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