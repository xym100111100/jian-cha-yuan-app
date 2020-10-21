import request from '../../utils/request'

//登录
export function loginData(data) {
    return request({
      url: '/login/sign',
      method: 'post',
      data
    })
  }