import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHANGE_CART_SELECT,
  CHANGE_CART_SELECT_ALL
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      /* payload:新添加的商品
      查找之前数组中是否有该商品
      let oldProduct = null
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      } */
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) { // 数量+1
        context.commit(ADD_COUNTER, oldProduct)
      } else { // 添加了新的商品
        payload.count = 1
        payload.isChecked = false
        context.commit(ADD_TO_CART, payload)
      }
      resolve("添加商品成功！")
    })
  },
  changeCartSelect(context, iid) {
    let payload = context.state.cartList.find(payload => (payload.iid === iid))
    context.commit(CHANGE_CART_SELECT, payload)
  },
  changeCartSelectAll(context, isAllSelect) {
    context.commit(CHANGE_CART_SELECT_ALL, isAllSelect)
  }
}