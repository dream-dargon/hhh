  
import{ HOME_GET_USER, HOME_INSERT_USER, HOME_UPDATE_USER, HOME_DELETE_USER, LIST_LISTWITHPAGE} from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'
// 登录
export const getData = () => {
  return{
    type: HOME_GET_USER, 
    payload: post(`aps/${api.getUser}`) 
  }
}
//添加
export const insertUser = option => {
  return{
    type: HOME_INSERT_USER,
    payload: post(`aps/${api.addUser}`,option)
  }
}
//修改
export const updateUser = option => {
  return{
    type: HOME_UPDATE_USER, 
    payload:post(`aps/${api.updateUser}`,option)
  }
}
//删除
export const deleteUser = option => {
  return{
    type: HOME_DELETE_USER, 
    payload:post(`aps/${api.deleteUser}`,option)
  }
}
//下拉加载
export const listWithPage = option => {
  return{
    type: LIST_LISTWITHPAGE, 
    payload: post(api.listWithPage, option) 
  }
}