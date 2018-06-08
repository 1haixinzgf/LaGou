function request(params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: params.url,
      method: params.method || 'get',
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      success: resolve,
      error: err => {
        console.log("请求出错:" + err.errMsg);
      }
    })
  })
}


export default request
