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

export const TOGGLE_DISPLAY_ACTIVE_ITEM = 'TOGGLE_DISPLAY_ACTIVE_ITEM'

export const toggleDisplayActiveItem = listId => ({
  type: TOGGLE_DISPLAY_ACTIVE_ITEM,
  payload: listId,
})

export const TOGGLE_CHECK = 'TOGGLE_CHECK'

export const toggleCheck = (listId, itemId) => ({
  type: TOGGLE_CHECK,
  payload: { listId, itemId },
})

export const ADD_NEW_LIST = 'ADD_NEW_LIST'

export const addNewList = listName => ({
  type: ADD_NEW_LIST,
  payload: listName,
})
