// components/w-tab-control/w-web-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabItemClick(event){
      const index = event.currentTarget.dataset.index
      const itemTitle = event.currentTarget.dataset.itemtitle
      console.log('handleTabItemClick----------',event.currentTarget.dataset)
      this.setData({
        currentIndex:index
      })
      // 通知父组件哪个被点击了
      this.triggerEvent("tabItemClick",{index,itemTitle})

    }
  }
})
