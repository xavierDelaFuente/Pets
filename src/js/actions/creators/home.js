import { FETCH_API_REQUEST, FETCH_API_FAILURE, FETCH_API_SUCCESS, SELECT_CURRENT_CHARACTER } from '../types/home'
import axios from 'axios'

export const APIFailure = () => {
  return {
    type: FETCH_API_FAILURE
  }
}

export const APIRequest = () => {
  return {
    type: FETCH_API_REQUEST
  }
}

export const APISuccess = apiResponse => {
  return {
    type: FETCH_API_SUCCESS,
    apiResponse
  }
}

export const recoverAPIdata = () => {
  return (dispatch: Function) => {
    axios
      .get(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`)
      .then(response => dispatch(APISuccess(response.data.Brastlewark)))
      .catch(error => {
        console.error('error getting Catalog ', error) // eslint-disable-line no-console
      })
  }
}

export const selectCurrentCharacter = (character) => {
  return {
    type: SELECT_CURRENT_CHARACTER,
    character
  }
}
