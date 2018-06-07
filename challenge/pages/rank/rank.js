// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: ['../../images/imageUrl1.jpg',
      '../../images/imageUrl2.jpg'],
      rank: []
  },
  hotcities() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b06da4872643c7a5c4edcd1/api/rank',
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        this.setData({
        rank: res.data.data
        });
        console.log(res)
      },
      fail: () => {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hotcities();
 
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
  
  }
})