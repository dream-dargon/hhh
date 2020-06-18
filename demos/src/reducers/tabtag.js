import { GET_TAG_LIST, DELETE_TAG_LIST } from '@/constants/actionTypes'

const initialState = {
  list: [],
  deleteList: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_TAG_LIST: 
    return { ...state, list: payload }

  case DELETE_TAG_LIST: 
    return { ...state, deleteList: payload }

  default:
    return state
  }
}
