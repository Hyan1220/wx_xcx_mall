// pages/address/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressObjects: [{ "isDefault": false, "realname": "asda", "mobile": "18909287319", "user": null, "detail": "csfdsf", "objectId": "5afb85f40b6160006ff00f2d", "createdAt": "2018-05-16T01:14:28.495Z", "updatedAt": "2018-05-16T03:10:02.552Z" }, { "isDefault": true, "realname": "王然", "city": "朝阳区", "region": "三环以内", "mobile": "13555211111", "province": "北京", "user": null, "detail": "104", "objectId": "5afb9b5417d009744e9e0c1b", "createdAt": "2018-05-16T02:45:40.520Z", "updatedAt": "2018-05-16T03:10:02.567Z" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  },
  edit: function (e) {

  },
  delete: function (e) {
    
  },
  add: function () {
    wx.navigateTo({
      url: '../add/add'
    });
  },
})