// components/my-mslot/my-mslot.js
Component({
  // ================让使用者可以给组件传入数据==============
  properties:{
    title:{
      type:String,
      value:"",
      // 监听值的改变
      observer: (newVal,oldVal)=>{

      }
    }
  },
  // 定义组件内部的数据
  data:{
    counter:0
  },
  // 用于定义组件内部的函数
  methods:{
    foo(){

    }
  },
  // 定义组件的配置选项
  options:{
    // 开启多插槽
    multipleSlots:true
  }, 
  // 外界给组件传入额外的样式
  externalClasses: [

  ],
  // 监听properties/data的改变
  observers:{
    counter:(newVal,oldVal)=>{
      console.log(newVal)
    }
  },

  // ----------------组件中监听生命周期函数-----------
  // 1.监听页面的生命周期函数
  pageLifetimes:{
    show(){
      console.log('组件所在页面显示出来')
    },
    hide(){
      console.log('组件所在页面隐藏')
    },
    resize(){
      console.log('组件所在页面发生拉伸')
    }
  },
  // 2.监听组件的生命周期函数
  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },
    attached(){
      console.log(' 在组件实例进入页面节点树时执行')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    moved(){
      console.log('在组件实例被移动到节点树另一个位置时执行')
    },
    detached(){
      console.log('在组件实例被从页面节点树移除时执行')
    }
  }
})
