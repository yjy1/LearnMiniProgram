// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'哈哈哈'
  },
  handleBtnClick(){
    console.log('分类按钮点击。。。')
    this.setData({
      message: "呵呵呵"
    })
  }
 
})