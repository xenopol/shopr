export const ADD_NEW_LIST_ITEM = 'ADD_NEW_LIST_ITEM'

export const addNewListItem = itemName => ({
  type: ADD_NEW_LIST_ITEM,
  payload: itemName,
})


export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM'

export const removeListItem = itemId => ({
  type: REMOVE_LIST_ITEM,
  payload: itemId,
})

export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM'

export const editListItem = itemData => ({
  type: EDIT_LIST_ITEM,
  payload: itemData,
})

export const TOGGLE_EDITING_LIST_ITEM = 'TOGGLE_EDITING_LIST_ITEM'

export const toggleEditingListItem = itemData => ({
  type: TOGGLE_EDITING_LIST_ITEM,
  payload: itemData,
})
