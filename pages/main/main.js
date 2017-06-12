//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '京通回收，您身边的回收管家！',
        userInfo: {}
  },
    //事件处理函数
      bindViewTap: function () {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      
    })
  }
})
