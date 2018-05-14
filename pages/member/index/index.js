const app = getApp()

Page({
  onShow() {
    this.getUserInfo();
  },	
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },
  /* 订单 */ 
  navigateToOrder: function (e) {
    var status = e.currentTarget.dataset.status
    wx.navigateTo({
      url: '../../order/list/list?status=' + status
    });
  },
  navigateToAddress: function () {
    wx.navigateTo({
      url: '../../address/list/list'
    });
  },

  navigateToAboutus: function () {
    wx.navigateTo({
      url: '/pages/member/aboutus/aboutus'
    });
  }
})