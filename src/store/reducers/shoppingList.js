import {
  TOGGLE_CHECK,
  ADD_NEW_LIST_ITEM,
  REMOVE_LIST_ITEM,
  EDIT_LIST_ITEM,
  TOGGLE_EDITING_LIST_ITEM,
  TOGGLE_DISPLAY_ACTIVE_ITEM,
  ADD_NEW_LIST,
} from '../actions/list'

const initialState = {
  lists: [
    {
      id: 1,
      name: '',
      items: [
        {
          id: 1,
          name: 'milk',
          isCompleted: false,
          isEditing: false,
        },
      ],
      showActive: true,
    },
  ],
}

const shoppingLists = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CHECK:
      return {
        lists: state.lists.map((list) => {
          if (list.id === payload.listId) {
            return {
              ...list,
              items: list.items
                .map(item => (item.id === payload.itemId ? { ...item, isCompleted: !item.isCompleted } : item)),
            }
          }
          return list
        }),
      }
    case ADD_NEW_LIST_ITEM:
      return [...state, { id: state.length + 1, name: payload, isCompleted: false }]
    case REMOVE_LIST_ITEM:
      return state.filter(({ id }) => id !== payload)
    case EDIT_LIST_ITEM:
      return state.map(item => (item.id === payload.id ? { ...item, name: payload.name } : item))
    case TOGGLE_DISPLAY_ACTIVE_ITEM:
      return state.map(item => (item.id === payload.id ? { ...item, name: payload.name } : item))
    case TOGGLE_EDITING_LIST_ITEM:
      return state.map(item => (item.id === payload.id
        ? { ...item, isEditing: payload.isEditing }
        : { ...item, isEditing: false }
      ))
    case ADD_NEW_LIST:
      return { lists: [...state.lists, { id: Date.now(), name: payload.name, showActive: true, items: [] }] }
    default:
      return state
  }
}

export default shoppingLists
