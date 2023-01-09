// pages/home/home.js
Page({
  data: {

  },
  onLoad(options) {
    // 发送网络请求
    // 1.发送最简单的get请求get
    // wx.request({
    //   url: 'http://localhost:8888/userlist',
    //   data:{ //携带参数
    //     type:'住宅v'
    //   },
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })

    // 2.post请求
    wx.request({
      url: 'http://localhost:8888/userlist',
      method:'POST',
      data:{
        "id": 10087,
        "title": "海天家园2023",
        "type": "住宅2023",
        "num": "1-1-2",
        "hometype": "三室两厅",
        "name": "关羽"
      },
      success:(res)=>{
        console.log('success-----------',res)
      },
      // 失败的情况
      fail:(err)=>{
        console.log('fail-----------',err)
      }
    })
  },
 
})