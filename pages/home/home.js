// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  onLoad(options) {
    // --------------------1.原生发送网络请求-------------------
    this.get_data_origin()

    // --------------------2.使用封装的request发送网络请求-------------------
    // Promise最大的好处是防止出现回调地狱
    request({
      url:"http://localhost:8888/userlist",
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },
  get_data_origin(){
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
    // wx.request({
    //   url: 'http://localhost:8888/userlist',
    //   method:'POST',
    //   data:{
    //     "id": 10087,
    //     "title": "海天家园2023",
    //     "type": "住宅2023",
    //     "num": "1-1-2",
    //     "hometype": "三室两厅",
    //     "name": "关羽"
    //   },
    //   success:(res)=>{
    //     console.log('success-----------',res)
    //   },
    //   // 失败的情况
    //   fail:(err)=>{
    //     console.log('fail-----------',err)
    //   }
    // })
  }
})