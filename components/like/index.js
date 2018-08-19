// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean,
      value: false
    },
    count:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    //封装性 开放性
    //哪些是被封装在内部的，哪些是开放出来给外部设置的
    //开放出来的data就叫做properties
    likedSrc: 'images/like.png',
    dislikedSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event){
      // let variable scope ---> '{....}'
      let like = this.properties.like
      let count = this.properties.count
      count = like?count-1:count+1
      // the setData's 'Data' is the data above
      this.setData({
        like:!like,
        count:count
      })
    }
  }
})
