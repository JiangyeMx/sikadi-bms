import request from '@/utils/request'

export function getBanner() {
  return request({
    url: '/res/banner',
    method: 'get',
  })
}