const SET_USER = 'SET_USER';
const UNSET_USER = 'UNSET_USER'

export const setUser = (user) => {
   return {
      type: SET_USER, 
      payload: user
   }
}

export const unsetUser = (user) => {
   return {
      type: UNSET_USER, 
      payload: user
   }
}