import { FETCH_API_REQUEST, FETCH_API_FAILURE, FETCH_API_SUCCESS, SELECT_CURRENT_CHARACTER } from '../types/home'

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

export const selectCurrentCharacter = (character) => {
  return {
    type: SELECT_CURRENT_CHARACTER,
    character
  }
}
