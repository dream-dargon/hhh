import { FETCH_LOGIN, FETCH_PREVE } from '@/constants/actionTypes'
const initialState = {
  PersonInfo:{},
  username:''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_LOGIN:
    return { ...state,username:payload.data.user_name}
  case FETCH_PREVE:
    return {...state,PersonInfo:{username:payload.username,pwd:payload.pwd}}
  default:
    return state
  }
}
