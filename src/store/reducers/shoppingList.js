import { TOGGLE_CHECK } from '../actions/listItem'
import { ADD_NEW_LIST_ITEM } from '../actions/addNewListItem'

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
    case ADD_NEW_LIST_ITEM:
      return [...state, { id: state.length + 1, name: payload, isChecked: false }]
    default:
      return state
  }
}

export default shoppingList
