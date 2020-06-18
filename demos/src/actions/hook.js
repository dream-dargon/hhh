import { createActions } from 'redux-actions'
import { GET_NAME } from '@/constants/actionTypes'

export default createActions({
  [GET_NAME]: options => options
})