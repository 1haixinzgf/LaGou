// pages/result/result.js
import request from '../../utils/city.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: [],
    currentDesc: [],
    isHidden: true,
  },
  sharePosition(e) {
    wx.showActionSheet({
      itemList: ['生成朋友圈分享图', '转发好友或者群聊', '生成长图'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  getActive(id) {
    const url = 'https://www.easy-mock.com/mock/5b06da4872643c7a5c4edcd1/api/desc#!method=get';
    var params = {
      url: url,
      method: 'GET',
    };
    let position = [];
    let currentDesc = this.data.currentDesc
    request(params).then(res => {
      position = res.data.data.position;
    }).then(() => {
      for (let i = 0; i < position.length; i++) {
        if (i === id) {
          let that = this;
          that.setData({
            currentDesc: position[i]
          })
          console.log(that.data.currentDesc)
        }
      }
    }
      );
  },
  collectionPosition(e) {
    console.log(e);
    let isHidden = this.data.isHidden;
    this.setData({
      isHidden: !isHidden
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id - 0;
    this.getActive(id);
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