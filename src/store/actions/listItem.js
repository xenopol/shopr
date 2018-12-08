export const TOGGLE_CHECK = 'TOGGLE_CHECK'

export const toggleCheck = itemId => ({
  type: TOGGLE_CHECK,
  payload: itemId,
})
