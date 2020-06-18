import { GET_TAG_LIST, DELETE_TAG_LIST } from '@/constants/actionTypes'

export function getTagList (options) {
  return {
    type: GET_TAG_LIST,
    payload: options
  }
}

export function delTagList (options) {
  return {
    type: DELETE_TAG_LIST,
    payload: options
  }
}