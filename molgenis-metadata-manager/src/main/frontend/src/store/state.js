export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  alert: {
    message: null,
    type: null
  },
  entityTypes: [],
  editorEntityType: {}
}

export default state
