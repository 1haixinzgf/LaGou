// pages/search/search.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    location: '南昌',
    search: {
    content:''
  },
  history: []
  },
  choosecity(e) {
    wx.navigateTo({
      url:'../cities/cities',
      success:() => {
        
      },
      fail: () => {
        
      }
    })
  },
  searchinto(e) {
    // console.log(e)
    const value = this.data.search.content;
    const history = this.data.history;
    console.log(value);
    history.push(value);
    console.log(history);
    this.setData({
      history
    })
  },
  searchdelete(e) {
    this.setData({
      ['search.content']: ''
    })
  },
  deleteall(e) {
    const history = this.data.history;
    wx.showModal({
      title: '提示',
      content: '确定删除全部历史搜索',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            history: []
          })
        } else if (res.cancel) {

        }
      }

    })
    
  },
  onInput(e) {
    // console.log(e);
    const value = e.detail.value;
    // console.log(value);
    this.setData({
      ['search.content']: value
    })
  },
  searchcancel(e) {
    console.log(e)
    wx.navigateBack({
      
      url: '../cities/cities',
      success: () => {
        console.log('跳转成功')
      },
      fail: () => {
        console.log('跳转失败')
      }
    })
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
  
  }
})