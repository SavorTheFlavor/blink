// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let that = this;
    //都是异步的，所以都是用回调函数处理返回结果
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/latest?appKey=98HcsgdJ3mx4Ufcm',
      success: (res) => {
        //使用箭头函数的方式访问真实的this或者使用上面保存的that
        console.log(this.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


    //Promise是为了解决回调地狱的
  //   wx.request({
  //     url: '',
  //     success: (res) => {
  //       wx.request({
  //         url: '',
  //         success: (res) => {
  //           wx.request({
  //             url: '',
  //             success: (res) => {

  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})