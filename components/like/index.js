// components/like/index.js
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
    like: true,
    count1: 99,
    count2: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event){
      console.log(event)
    }
  }
})
