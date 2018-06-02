// pages/editpersonal/editpersonal.js
// import validateFunc from '../utils/city.js'
// const validateFunc = require('../utils/city.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arraySex: {
      "sex": ["男", "女"],
      index: '',
      isPickSelect: false,
    },
    arrayEducation: {
      education: ["大专", "本科", "硕士", "博士", "其他"],
      index: '',
      isPickSelect: false,
    },
    arrayExperience: {
      experience: ["实习", "应届毕业生", "1年", "2年", "3年", "4年", "5年", "6年"],
      index: '',
      isPickSelect: false,
    },
  nameVal: "",
  telVal: '',
  mailVal: '',
  date: "1999-01-01",
  city: '',
  inputVal: '',
  isChooseCity: false,
  isFocus: false,
  num: 0
  // hidden： false
  },
  bindSexChange(e){
    console.log(e);
    let val = e.detail.value;
    this.setData({
      ['arraySex.index']: val,
      ['arraySex.isPickSelect']: true
    })
  },
  nameChange(e) {
    let value = e.detail.value;
    this.setData({
      nameVal: value
    })
  },
  bindDateChange(e) {
    let val = e.detail.value;
    this.setData({
     date: val
    })
  },
  bindEducationChange(e){
    let val = e.detail.value;
    this.setData({
      ['arrayEducation.index']: val,
      ['arrayEducation.isPickSelect']: true
    })
  },
  bindExperienceChange(e) {
    let val = e.detail.value;
    console.log(val)
    this.setData({
      ['arrayExperience.index']: val,
      ['arrayExperience.isPickSelect']: true
    })
  },
  telChange(e){
    let value = e.detail.value;
    this.setData({
      nameVal: value
    })
  },
  mailChange(e){
    let value = e.detail.value;
    this.setData({
      nameVal: value
    })
  },
  cityChange(e) {
    wx.navigateTo({
      url: '../cities/cities',
      success: (res) =>{
        // console.log(city)
      },
      fail: () =>{

      }
    })
  },
  inputChange(e) {
    console.log(e)
    let val = e.detail.value;
    let num = this.data.num;
    let len = val.split('').length;
    if(len>60) {
      wx.showToast({
        title: '最多只能输入60个字',
        image: '../../images/warn.png',
        duration: 1500
      })
    }
    this.setData({
      inputVal: val,
      isFocus: true,
      num: len
    })
  },
  formSubmit(e) {
let nameVal = this.data.nameVal;
    // 验证是否输入姓名
    // if(nameVal=='') {
    //   wx.showToast({
    //     title: '请输入你的姓名',
    //     image: '../../images/warn.png',
    //     duration: 1500
    //   })
    //   return false;
    // }

    this.errorInput(this.data.nameVal,'请输入你的名字')
    // 验证是否选择性别
    // let arraySex = this.data.arraySex
    // let sexVal = arraySex.sex[arraySex.index]
    // console.log(arraySex);
    // console.log(sexVal)
    // if(!sexVal) {
    //   wx.showToast({
    //     title: '请选择性别',
    //     image: '../../images/warn.png',
    //     duration: 1500
    //   })
    //   return false;
    // };
    // this.error(this.data.arraySex,this.data.arraySex.sex,'请选择你的性别');
    this.error(this.data.arraySex.isPickSelect, '请选择你的性别')
    let date = this.data.date;
    if(date==='1999-01-01') {
      wx.showToast({
        title: '请选择你的出生日期',
        image: '../../images/warn.png',
        duration: 1500
      })
      return false;
    }
  },
  errorInput(val,errorMsg) {
    // console.log(val, errorMsg)
  if(!val&&val.trim()){
    wx.showToast({
      title: errorMsg,
      image: '../../images/warn.png',
      duration: 1500
    })
    return false;
  }
  },
  error(isShow, errorMsg) {
    console.log(isShow, errorMsg)
  if(!isShow) {
   wx.showToast({
        title: errorMsg,
        image: '../../images/warn.png',
        duration: 1500
      })
      return false;
    }
  },
  // error(array,name,errorMsg) {
  //   console.log(array, name, errorMsg);
  //   var index = array.index;
  //   console.log(index);
  //   var val = null;
  //   if(index){
  //      val = name[index]; 
  //   }
  //   console.log(val);
  //   if(!val) {
  //       wx.showToast({
  //         title: errorMsg,
  //         image: '../../images/warn.png',
  //         duration: 1500
  //       })
  //       return false;
  //   }
  // },
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