import {config} from '/config.js'

const tips = {
  99999: 'an error occurs...',
  1005: 'invalid appkey...',
  3000: 'data not exist'
}

class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url  + params.url,
      method: params.method,
      data:params.data,
      header: {
        'content-type': 'application/json',
        'appkey':config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if(code.startsWith("2")){
          params.success(res.data)
        }else{
          this._show_error(res.data.error_code)
        }
      },
      fail: (err)=>{
        this._show_error(99999)
      }
    })
  }

  _show_error(error_code){
    if(!error_code){
      error_code = 99999
    }
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration: 2000
    })
  }

}