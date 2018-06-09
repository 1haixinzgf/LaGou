// pages/editpersonal/editpersonal.js
// import validateFunc from '../utils/city.js'
// const validateFunc = require('../utils/city.js')
var app = getApp()
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
  num: 0,
  
  // hidden： false
  },
  bindSexChange(e){
    // console.log(e);
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
    // console.log(val)
    this.setData({
      ['arrayExperience.index']: val,
      ['arrayExperience.isPickSelect']: true
    })
  },
  telChange(e){
    let value = e.detail.value;
    this.setData({
      telVal: value
    })
  },
  mailChange(e){
    let value = e.detail.value;
    this.setData({
      mailVal: value
    })
  },
  cityChange(e) {
    wx.navigateTo({
      url: '../cities/cities',
      success: (res) =>{
        
      },
      fail: () =>{

      }
    })
  },
  inputChange(e) {
    let val = e.detail.value;
    let num = this.data.num;
    let len = val.split('').length;
    if(len===60) {
      wx.showModal({
        title: '系统提示',
        content: '最多只能输入60个字',
        showCancel: false,
        success: ()=>{}
      })
    }
    this.setData({
      inputVal: val,
      isFocus: true,
      num: len
    })
  },
  formSubmit(e) {
    // if(this.data.nameVal.trim() === ''){
    //   wx.showToast({
    //     title: '请你输入姓名ssssssss',
    //     icon:'none',
    //     duration: 2000
    //   })
    //   return
    // }

    //验证是否输入名字
    let nameVal = this.data.nameVal;
    if (!this.errorInput(nameVal, '请输入你的名字')) {
      return false;
    };
console.log(nameVal)
    //验证是否选择性别
    let sex = this.data.arraySex.sex[this.data.arraySex.index];
    if (!this.error(this.data.arraySex.isPickSelect, '请选择你的性别')) {
      return false;
    };
console.log(sex)
    //验证是否选择了出生日期
    let date = this.data.date;
    if (date === '1999-01-01') {
      wx.showModal({
        title: '系统提示',
        content: '请选择你的出生日期',
        showCancel: false,
        duration: 1500,
        success: () => { }
      })
      return false;
    }
console.log(date)
    //验证是否选择了学历
    let education = this.data.arrayEducation.education[this.data.arrayEducation.index];
    if (!this.error(this.data.arrayEducation.isPickSelect, '请选择你的学历')) {
      return false
    }

    console.log(education)
    //验证是否选择了工作经验
    let experience = this.data.arrayExperience.experience[this.data.arrayExperience.index];
    if (!this.error(this.data.arrayExperience.isPickSelect, '请选择你的工作经验')) {
      return false
    }
    console.log(experience)
    let tel = this.data.telVal;
    if (!this.errorInput(tel, '请输入手机号码')) {
      return false;
    }
    if (!/1[3456789][0-9]{9}/.test(tel.trim())) {
      wx.showModal({
        title: '系统提示',
        content: '手机号码格式有误',
        showCancel: false,
        duration: 1500,
        success: () => { }
      })
      return;
    }
    console.log(tel)
    let mail = this.data.mailVal;
    if (!this.errorInput(mail, '请输入你的邮箱')) {
      return;
    }
    if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(mail.trim())) {
      wx.showModal({
        title: '系统提示',
        content: '请输入正确的邮箱',
        showCancel: false,
        duration: 1500,
        success: () => { }
      })
      return;
    }
console.log(mail)
let inputVal = this.data.inputVal;
if (!this.errorInput(inputVal, '一句话介绍你自己')) {
  return false;
}
    wx.setStorage({
      key: "personal",
      data: [{ name: nameVal },
        { sex: sex},
        { date: date }, 
        { education: education},
        { experience: experience},
         { tel: tel }, 
         { mail: mail }, 
         { inputVal: inputVal },
         ],
      success: function () {
        wx.showToast({
          title: "保存成功",
          icon: 'success',
          duration: 2000
        })
        setTimeout( function(){
          wx.navigateTo({
            url: "../resume/resume"
          })
        }, 1000);

      }
    })
  },
  errorInput(val, errorMsg) {
    if (val.trim() === '') {
      // console.log(errorMsg);
      wx.showModal({
        title: '系统提示',
        content: errorMsg,
        showCancel: false,
        duration: 1500,
        success: () => {
        }
      })
      return false;
    } else {
      return true;
    }
  },
  error(isShow, errorMsg) {
    if (!isShow) {
      wx.showModal({
        title: '系统提示',
        content: errorMsg,
        showCancel: false,
        duration: 1500,
        success: () => { }
      })
      return false;
    } else {
      return true;
    }

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