//index.js
//获取应用实例
// import position from '../../module/module.js';
const app = getApp()

Page({
  data: {
  position:[]
  },

  position() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b076053374bec38a648c338/position',//https://m.lagou.com/listmore.json?pageNo=1&pageSize=20
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        this.setData({
          position: res.data.data.position
        });
        // console.log(this.data.position);
      },
      fail: () => {
      }
    })
  },

onLoad(options){
  this.position();
  // console.log(this.data.position)
},
enterDesc(e) {
  let id = e.currentTarget.dataset.id;
  wx.navigateTo({
    url: `../result/result?id=${id}`
  })

},
jumpsearch(e) {
  wx.showLoading({
    title: '正在跳转',
  })
  wx.navigateTo({
    url: '../search/search',
    success: () => {
      wx.hideLoading()
    },
    fail: () => {
      // console.log('跳转失败');
    },
  })
}
})
