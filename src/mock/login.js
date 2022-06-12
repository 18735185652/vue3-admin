import mock from 'mockjs'

const profile = mock.mock('/api/sys/profile', 'get', (req, res) => {
  return {
    success: true,
    code: 200,
    data: {
      role: [{ id: '1', title: '超级管理员' }],
      _id: '628fdc40169ef65ad8cbc7db',
      id: '612710a9ec87aa543c9c3420',
      username: 'super-admin',
      title: '超级管理员',
      avatar:
        'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
      permission: {
        menus: [
          'userManage',
          'roleList',
          'permissionList',
          'articleRanking',
          'articleCreate'
        ],
        points: [
          'distributeRole',
          'importUser',
          'removeUser',
          'distributePermission'
        ]
      }
    },
    message: '获取资料成功'
  }
})
const login = mock.mock('/api/sys/login', 'post', (req, res) => {
  console.log('req: ', req)
  return {
    success: true,
    code: 200,
    data: { token: '4d50f783-c89d-40c4-9a94-38989e42ec46' },
    message: '登录成功'
  }
})
export default {
  profile,
  login
}
