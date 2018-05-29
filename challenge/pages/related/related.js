// pages/related/related.js
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
  financing: ["未融资","天使轮","A轮","B轮","C轮","D轮及以上","上市公司","不需要融资"],
  financingShowIndex:'',
  field: ["不限","移动互联网","电子商务","社交网络","O2O","企业服务","游戏","教育"],
  fieldShowIndex:''


  },
  select(e) {
    // console.log(e);
    // const currentindex = e.currentTarget.dataset;
    // console.log(value);
    

  },
  selectsalary(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  salaryShowIndex = this.data.salaryShowIndex;
    salaryShowIndex = index;
    console.log(salaryShowIndex);
    this.setData({
      salaryShowIndex
    })
  },
  selectpublishtime(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  publishtimeShowIndex = this.data.publishtimeShowIndex;
    publishtimeShowIndex = index;
    console.log(publishtimeShowIndex);
    this.setData({
      publishtimeShowIndex
    })
  },
  selecteducation(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  experienceShowIndex = this.data.experienceShowIndex;
    experienceShowIndex = index;
    console.log(experienceShowIndex);
    this.setData({
      experienceShowIndex
    })
  },
  selectmode(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  educationShowIndex = this.data.educationShowIndex;
    educationShowIndex = index;
    console.log(educationShowIndex);
    this.setData({
      educationShowIndex
    })
  },
  selectfinancing(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  salaryShowIndex = this.data.financingShowIndex;
    financingShowIndex = index;
    console.log(financingShowIndex);
    this.setData({
      financingShowIndex
    })
  },
  selectfield(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;
    let  fieldShowIndex = this.data.fieldShowIndex;
    fieldShowIndex = index;
    console.log(fieldShowIndex);
    this.setData({
      fieldShowIndex
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