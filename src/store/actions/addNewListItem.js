export const ADD_NEW_LIST_ITEM = 'ADD_NEW_LIST_ITEM'

export const addNewListItem = itemName => ({
  type: ADD_NEW_LIST_ITEM,
  payload: itemName,
})
