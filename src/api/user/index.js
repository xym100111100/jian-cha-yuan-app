import request from '../../utils/request'

//登录
export function loginData(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }

// 获取图片验证码
export function captchaImageData(params) {
    return request({
      url: '/captchaImage',
      method: 'get',
      params
    })
  }


