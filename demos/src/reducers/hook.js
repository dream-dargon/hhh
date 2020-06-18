import { handleActions } from 'redux-actions'
import { GET_NAME } from '@/constants/actionTypes'
const initialState = {
  name: 'xiao'
}

export default handleActions({
  [GET_NAME]: (state, action) => ({ ...state, ...action.payload })
}, initialState)
