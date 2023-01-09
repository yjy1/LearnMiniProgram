// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true
  },
  handleBtnClick(){
    // 获取组件对象
    const component = this.selectComponent('#sel-id')
    console.log('获取组件对象',component )
    // 调用setData对象设置组件内的counter的值（此种方式不合理）
    // component.setData({
    //   counter:component.data.counter+1
    // })

    // 调用组件内的方法
    component.handleIncrement(3)
  }
})