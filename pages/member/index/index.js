// pages/member/index/index.js
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
    wx.showModal({
      content: "生命周期函数--监听页面加载",
      confirmText: "确定",
      cancelText: "取消"
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showModal({
      content: "生命周期函数--监听页面初次渲染完成",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showModal({
      content: "生命周期函数--监听页面显示",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.showModal({
      content: "生命周期函数--监听页面隐藏",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.showModal({
      content: "生命周期函数--监听页面卸载",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showModal({
      content: "页面相关事件处理函数--监听用户下拉动作",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showModal({
      content: "页面上拉触底事件的处理函数",
      confirmText: "确定",
      cancelText: "取消"
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})