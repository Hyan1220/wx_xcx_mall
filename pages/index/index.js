//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function () {
    return {
      title: '快分享给你的朋友吧',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },
})
