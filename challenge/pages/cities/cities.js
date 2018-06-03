// pages/cities/cities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  hotcities: [],
  othercities: [],
  firstname:[],
  
  // place: ['全国', '呼和浩特','北京']
  },
  hotcities() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b094b715c37757453191eb3/hot-cities',
      method: 'get',
      header: {
        'content-type': 'application/json'  
      },
      success: res => {
        this.setData({
          hotcities: res.data.data.cities
        });
      },
      fail: () => {
      }
    })
  },
 othercities() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b094b715c37757453191eb3/hot-cities/address',
      method: 'get',
      header: {
        'content-type': 'application/json'  
      },
      success: res => {
        this.setData({
         firstname: res.data.data,
        });
      
      },
      fail: () => {
      }
    })
  },

  changecity(e) {
    var value = e.target.dataset.value;
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    
    prePage.setData({
      location: value,
      city: value
    });
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.hotcities(),
  this.othercities()
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