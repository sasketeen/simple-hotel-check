import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: 0,
  userData: {
    email: ''
  }
}

export const userSice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
    setUserData: (state, action) => {
      state.user = { ...state.userData, ...action.payload }
    }
  }
})

export const { setLogin, setLogout, setUserData } = userSice.actions;

export const selectUserIsLogin = (state) => state.user.isLogin;
export const selectUserData = (state) => state.user.userData;

export default userSice.reducer;
