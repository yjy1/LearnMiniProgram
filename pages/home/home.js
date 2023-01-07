// const { ConeShapeEmitter } = require("WechatXrFrame/components/emitter")

// 获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

 Page({ 
  handleGetUserInfo(event){
    console.log('handleGetUserInfo--',event )
  }
 })