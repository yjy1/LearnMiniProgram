// pages/home/home.js
Page({
  handleShowToast(){
    console.log('aaaaaaaa')
    wx.showToast({
      title: '我是弹窗',
      duration:3000,
      icon:"loading",
      mask:true,//不允许点击页面元素
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{
        console.log(err)
      },
      complete:(res)=>{
        console.log('complete---------',res)
      }
    })
  } ,
  handleShowModal(){
    wx.showModal({
      title: '我是Modal',
      content: '我是Modal里的内容',
      showCancel:true,
      cancelText:"退出",
      cancelColor:"orange",
      complete: (res) => {
        if (res.cancel) {
          console.log('cancel')
        }
    
        if (res.confirm) {
          console.log('confirm')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '我是loading',
      mask:true,
      success:()=>{
        setTimeout(() => {
          wx.hideLoading() // 关闭loading
        }, 3000);
      }
    })
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['方案1','方案2','方案3'],
      itemColor:"crimson",
      success:(res)=>{
        console.log('showActionSheet---',res)
      }
    })
  },
  onShareAppMessage(option){
    console.log(option)
    return{
      title:'你好啊',
      path:'../about/about.wxml',
      imageUrl:'https://www.lgstatic.com/thumbnail_160x160/i/image3/M01/58/86/CgpOIF34fTmAFX8BAAAXucoZ4a4114.jpg'
    }
  }
})