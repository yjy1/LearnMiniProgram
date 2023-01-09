 Page({
   onLoad(options){
    console.log('aaaaaaa',options)
   },
   onUnload( ){
    // 1.获取首页的页面对象
    // getCurrentPages 获取所有活跃的界面
    const pages = getCurrentPages()
    console.log('onUnload' ,pages)
    const home = pages[pages.length-2]
    // 2.调用页面对象的setData
    // home.setData({
    //   title:'呵呵呵'
    // })
    home.handleChangeTitle()
   }
 })