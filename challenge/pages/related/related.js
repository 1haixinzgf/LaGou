// pages/related/related.js
// var address = require('../../utils/city.js')
// var animation
import request from '../../utils/city.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  salary:["默认","2K以下","2K-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"],
  salaryShowIndex: '',

  publishtime: ["默认","今天发布","三天内","一周内","两周内"],
  publishtimeShowIndex:'',

  experience: ["应届毕业生","3年以下","3-5年","5-10年","10年以上"],
  experienceShowIndex:'',

  education: ["大专","本科","硕士","博士","不要求"],
  educationShowIndex:'',

  mode: ["全职","兼职","实习"],
  modeShowIndex:'',

  // financing: ["未融资","天使轮","A轮","B轮","C轮","D轮及以上","上市公司","不需要融资"]
  // financingShowIndex:'',
  financing: [{
    name: "未融资",
    id: 0,
    isShow: false
  }, {
    name: "天使轮",
    id: 1,
    isShow: false
  }, {
    name: "A轮",
    id: 2,
    isShow: false
  }, {
    name: "B轮",
    id: 3,
    isShow: false
  }, {
    name: "C轮",
    id: 4,
    isShow: false
  }, {
    name: "D轮及以上",
    id: 5,
    isShow: false
  }, {
    name: "上市公司",
    id: 6,
    isShow: false
  }, {
    name: "不需要融资",
    id: 7,
    isShow: false
  }],


  field: [{
    name: "不限",
    id: 0,
    isShow: false
  }, {
    name: "天使轮",
    id: 1,
    isShow: false
  }, {
    name: "A轮",
    id: 2,
    isShow: false
  }, {
    name: "B轮",
    id: 3,
    isShow: false
  }, {
    name: "C轮",
    id: 4,
    isShow: false
  }, {
    name: "D轮及以上",
    id: 5,
    isShow: false
  }, {
    name: "上市公司",
    id: 6,
    isShow: false
  }, {
    name: "不需要融资",
    id: 7,
    isShow: false
  },{
    name: "未融资",
    id: 0,
    isShow: false
  }, {
    name: "天使轮",
    id: 1,
    isShow: false
  }, {
    name: "A轮",
    id: 2,
    isShow: false
  }, {
    name: "B轮",
    id: 3,
    isShow: false
  }, {
    name: "C轮",
    id: 4,
    isShow: false
  }, {
    name: "D轮及以上",
    id: 5,
    isShow: false
  }, {
    name: "上市公司",
    id: 6,
    isShow: false
  }, {
    name: "不需要融资",
    id: 7,
    isShow: false
  }],
  currentIndex: 0,
  location: '南昌',
  status: 10,
  searchInfo: '',
  searchLists: [],
  currentLists: [],
  isShowHidden: false
  },
  onInput(e) {

  },
  select(e) {
    const status = e.currentTarget.dataset.status;
    const isShowHidden = this.data.isShowHidden;

    this.setData({
      status,
      isShowHidden: true
    })
  },

  selectPosition(e) {
    const isShowHidden = this.data.isShowHidden;
  this.setData({
    status:20,
    isShowHidden: false
  })
  },
  selectfinancing(e) {
    const index = e.target.dataset.index;
    var list = this.data.financing;
    for (var i = 0; i < this.data.financing.length; i++){
      if(index == i){
        console.log(index == i);
        list[i].isShow = !list[i].isShow;
      }
    }
    this.setData({
      financing: list
    });
    console.log(list);
  },

  selectfield(e) {
    const index = e.target.dataset.index;
    var list = this.data.field;
    console.log(list);
    for (var i = 0; i < list.length; i++) {
      if (index == i) {
        list[i].isShow = !list[i].isShow;
      }
    }
    this.setData({
      field: list
    });
  },
  selectsalary(e) {
    const index = e.currentTarget.dataset.index;
    let  salaryShowIndex = this.data.salaryShowIndex;
    salaryShowIndex = index;
    console.log(salaryShowIndex);
    this.setData({
      salaryShowIndex
    })
  },
  selectpublishtime(e) {
    const index = e.currentTarget.dataset.index;
    let  publishtimeShowIndex = this.data.publishtimeShowIndex;
    publishtimeShowIndex = index;
    this.setData({
      publishtimeShowIndex
    })
  },
  selectexperience(e) {
    const index = e.currentTarget.dataset.index;
    let  experienceShowIndex = this.data.experienceShowIndex;
    experienceShowIndex = index;
    this.setData({
      experienceShowIndex
    })
  },
  selecteducation(e) {
    const index = e.currentTarget.dataset.index;
    let  educationShowIndex = this.data.educationShowIndex;
    educationShowIndex = index;
    console.log(educationShowIndex);
    this.setData({
      educationShowIndex
    })
  },
  selectmode(e) {
    const index = e.currentTarget.dataset.index;
    let modeShowIndex = this.data.modeShowIndex;
    modeShowIndex = index;
    console.log(modeShowIndex);
    this.setData({
      modeShowIndex
    })
  },
  changesort(e) {
    console.log(e)
  const currentIndex= e.currentTarget.dataset.index;
  console.log(currentIndex)
    this.setData({
    currentIndex
    })
  },
  changecity(e) {
    wx.navigateTo({
      url:'../cities/cities',
      success: () =>{
      },
      fail:() => {
      }
    })
  },
  getActive(value) {
    const url = 'https://www.easy-mock.com/mock/5b076053374bec38a648c338/position/morePositions';
    var params = {
      url: url,
      method: 'GET',
    };
    let searchLists = this.data.searchLists
    request(params).then(res => {
      searchLists = res.data.data.position;
      console.log(searchLists)
    }).then(() => {
      for (let i = 0; i <searchLists.length; i++) {
        if (searchLists[i].job === value ) {
          let that = this;
          let currentLists = that.data.currentLists;
          currentLists.push(searchLists[i])
          console.log(that.data.currentLists)
          that.setData({
            currentLists
          })
        }
      }
    }
  );
},
  enterDesc(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../result/result?id=${id}`
    })
  },
  collectionPosition(e) {
    wx.showModal({
      title: '系统提示',
      content: '收藏成功',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('related页面加载');
    let value = options.value;
    this.getActive(value);
    let searchInfo = this.data.searchInfo;
    this.setData({
      searchInfo: value
    })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('related页面加载完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('related页面展示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('related页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('related页面卸载');
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