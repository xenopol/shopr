import { TOGGLE_CHECK } from '../actions/listItem'

const initialState = [
  {
    id: 1,
    name: 'milk',
    isChecked: false,
  },
]

const shoppingList = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CHECK:
      return state.map(item => (item.id === payload ? { ...item, isChecked: !item.isChecked } : item))
    default:
      return state
  }
}

export default shoppingList
