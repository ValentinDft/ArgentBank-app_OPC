import { createSlice, configureStore } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: { statusLogin: false, token: null },
  reducers: {
    signInReducer: (state, action) => {
      state.statusLogin = action.payload.statusLogin;
      state.token = action.payload.token;
    },
  },
});

const dataUserSlice = createSlice({
  name: 'dataUser',
  initialState: {
    email: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null,
    id: null,
  },
  reducers: {
    dataUserReducer: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.id = action.payload.id;
    },
  },
});

export const { signInReducer } = loginSlice.actions;
export const { dataUserReducer } = dataUserSlice.actions;

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    user: dataUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
