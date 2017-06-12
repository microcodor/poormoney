//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  towu:function(e){
    wx.navigateTo({
      url: '../main/main',
    })
  },
  toqian: function (e) {
    wx.navigateTo({
      url: '../main/main',
    })
  }
})
