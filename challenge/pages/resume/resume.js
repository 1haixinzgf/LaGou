// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  editPersonal(e) {
  wx.navigateTo({
    url: `../editpersonal/editpersonal`,
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
    var that = this;
    wx.getStorage({
      key: "personal",
      success: function (res) {
        console.log(res.data)
        if (res.data.length > 0) {
          that.setData({
            name: res.data[0].name,
            sex: res.data[1].sex,
            date: res.data[2].date,
            education: res.data[3].education,
            experience: res.data[4].experience,
            tel: res.data[5].tel,
            mail: res.data[6].mail,
            inputVal: res.data[7].inputVal,
          })
        }
      }
    })
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