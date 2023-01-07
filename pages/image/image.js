// pages/image/image.js
Page({
    /**
   * 页面的初始数据
   */
  data: {
    imagePath:""
  },
  handleChoseAlbum(){
    console.log('handleChoseAlbum')
    // 系统API，让用户在相册中选择图片（或者拍照）
    wx.chooseMedia({
      success: (res)=> {
        console.log(res)
        // 1.取出路径
        const path = res.tempFiles[0]
        this.setData({
          imagePath:path
        })
        console.log('path--',this.data.imagePath)
      }
    })
     
  },
  handleImageLoad(){
    console.log('图片加载完成')
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