import api from '@/services/api'
import { post} from '@/utils/request'
import { FETCH_LOGIN, FETCH_PREVE } from '@/constants/actionTypes'
export function toLogin(option) {
  return {
    type: FETCH_LOGIN,
    payload: post(`aps/${api.login}`,option)
  }
}
export function toPreve(payload) {
  return {
    type: FETCH_PREVE,
    payload
  }
}