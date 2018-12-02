const form = (state = [], action) => {
  switch (action.type) {
    case 'GET_FORMS':
      return action.forms
    case 'ADD_FORM':
      return [action.form, ...state]
    case 'UPDATE_FORM':
      return state.map(f => {
        if (f.id === action.form.id)
          return action.form
        return f
      })
    case 'DELETE_FORM':
      return state.filter(form => form.id !== action.id)
    default:
      return state;
  }
}

export default form;