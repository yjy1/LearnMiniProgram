 Page({
   data: {
     name: "coderycj",
     age: 26,
     students: [{
         id: 10,
         name: 'kobe',
         age: 30
       },
       {
         id: 11,
         name: 'kobe1',
         age: 31
       },
       {
         id: 12,
         name: 'kobe2',
         age: 32
       },
       {
         id: 13,
         name: 'kobe3',
         age: 33
       },
       {
         id: 14,
         name: 'kobe4',
         age: 34
       },
     ],
     counter: 0
   },
   handleBtnClick() {
     //  1.错误做法，界面不会发生刷新
     //  this.data.couter++
     //  console.log(this.data.couter)

     // 2.this.setData()
     this.setData({
       counter: this.data.counter + 1
     })
   },
   handleSubtraction(){
     this.setData({
       counter:this.data.counter -1
     })
   }
 })