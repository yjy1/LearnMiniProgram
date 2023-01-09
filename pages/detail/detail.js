 Page({
  handleBack(){
    console.log('handleBack')
    wx.navigateBack({
      delta: 2,
    })
  } 
 })