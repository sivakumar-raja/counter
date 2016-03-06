import * as types from '../constants/actionTypes.js'

export function doIncrement(){
  return { type: types.INCREMENT }
}

export function doDecrement(){
  return { type: types.DECREMENT }
}
