import { createSlice } from '@reduxjs/toolkit'
import { getAccessToken, getBankAccessToken } from '../services/LoginService'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    token: null,
    bankToken: null,
    selectedRegistration: null,
  },
  reducers: {
    changeId: (state, action) => {
      state.id = action.payload
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setBankToken: (state, action) => {
      state.bankToken = action.payload
    },
    setRegistration: (state, action) => {
      state.selectedRegistration = action.payload
    }
  }
})

export const getToken = () => dispatch => {
  getAccessToken()
  .then( res => {
    window.localStorage.setItem('token', res.data.access_token)
    dispatch(setToken(res.data.access_token))
  })
  .catch( err => console.log(err))
};
export const getBankToken = () => dispatch => {
  getBankAccessToken()
  .then( res => {
    window.localStorage.setItem('bankToken', res.data.access_token)
    dispatch(setBankToken(res.data.access_token))
  })
  .catch( err => console.log(err))
};

export const { changeId, changeName, setToken, setRegistration, setBankToken } = userSlice.actions

export default userSlice.reducer