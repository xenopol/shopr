import { TOGGLE_CHECK } from '../actions/listItem'
import {
  ADD_NEW_LIST_ITEM,
  REMOVE_LIST_ITEM,
  EDIT_LIST_ITEM,
  TOGGLE_EDITING_LIST_ITEM,
} from '../actions/addNewListItem'

const initialState = [
  {
    id: 1,
    name: 'milk',
    isChecked: false,
    isEditing: false,
  },
]

const shoppingList = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CHECK:
      return state.map(item => (item.id === payload ? { ...item, isChecked: !item.isChecked } : item))
    case ADD_NEW_LIST_ITEM:
      return [...state, { id: state.length + 1, name: payload, isChecked: false }]
    case REMOVE_LIST_ITEM:
      return state.filter(({ id }) => id !== payload)
    case EDIT_LIST_ITEM:
      return state.map(item => (item.id === payload.id ? { ...item, name: payload.name } : item))
    case TOGGLE_EDITING_LIST_ITEM:
      return state.map(item => (item.id === payload.id
        ? { ...item, isEditing: payload.isEditing }
        : { ...item, isEditing: false }
      ))
    default:
      return state
  }
}

export default shoppingList
