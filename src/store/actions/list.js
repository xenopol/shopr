export const ADD_NEW_LIST_ITEM = 'ADD_NEW_LIST_ITEM'

export const addNewListItem = (listId, itemName) => ({
  type: ADD_NEW_LIST_ITEM,
  payload: { listId, itemName },
})

export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM'

export const removeListItem = (listId, itemId) => ({
  type: REMOVE_LIST_ITEM,
  payload: { listId, itemId },
})

export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM'

export const editListItem = (listId, itemData) => ({
  type: EDIT_LIST_ITEM,
  payload: { listId, itemData },
})

export const TOGGLE_EDITING_LIST_ITEM = 'TOGGLE_EDITING_LIST_ITEM'

export const toggleEditingListItem = (listId, itemData) => ({
  type: TOGGLE_EDITING_LIST_ITEM,
  payload: { listId, itemData },
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
