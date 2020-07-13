import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHANGE_CART_SELECT,
  CHANGE_CART_SELECT_ALL
} from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一
  [ADD_COUNTER](state, payload) {
    payload.count ++
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [CHANGE_CART_SELECT](state, payload) {
    payload.isChecked = !payload.isChecked
  },
  [CHANGE_CART_SELECT_ALL](state, isAllSelect) {
    state.cartList.forEach(item => (item.isChecked = isAllSelect))
  }
}