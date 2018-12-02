import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const setForms = (forms) => {
  return { type: 'GET_FORMS', forms }
}

export const getForms = () => {
  return dispatch => {
    axios.get('/api/forms')
      .then(res => {
        dispatch(setForms(res.data))
      })
      .catch(err => {
        dispatch(setFlash('Error loading Forms, please try again.', 'red'))
      })
  }
}

export const updateForm = (form, id, history) => {
  return (dispatch) => {
    axios.put(`/api/forms/${id}`, { form })
      .then(res => {
        dispatch({ type: 'UPDATE_FORM', form: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to update form', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

export const deleteForm = (id) => {
  return (dispatch) => {
    axios.delete(`/api/forms/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_FORM', id, headers: res.headers });
      })
      .catch(err => {
        dispatch(setFlash('Error Deleting Form. Try Again,', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

export const addForm = (form) => {
  return (dispatch) => {
    axios.post(`/api/forms`, { form })
      .then(res => {
        dispatch({ type: 'ADD_FORM', form: res.data, headers: res.headers })
        dispatch(setFlash('Thanks for filling out an application, Scott will contact you after review.', 'green'))
      })
      .catch(err => {
        dispatch(setFlash('Failed to add form', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}