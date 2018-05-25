const position = () => {
    wx.request({
        url:'https://www.easy-mock.com/mock/5b076053374bec38a648c338/position/',
        method: 'get',
        header: {
            'content-type': 'application/x-www-form-urlencoded' 
        },
        success: res => {
            return res
            console.log(res);
        },
        fail:() => {

        }
    })
}
export default position