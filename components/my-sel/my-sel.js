// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(num){
      console.log('组件内的handleIncrement')
      this.setData({
        counter:this.data.counter+num
      })
    }
  }
})
