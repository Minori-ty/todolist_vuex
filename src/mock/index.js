import Mock from 'mockjs'
Mock.mock('/list', 'get', {
  'data|5': [
    {
      'id|+1': 0,
      info: '@cparagraph(1,2)',
      done: '@boolean()'
    }
  ],
  meta: {
    msg: '获取成功',
    status: 200
  }
})
