import { configureStore } from '@reduxjs/toolkit';
import CommunitySlice from '../components/Community/CommunitySlice';
import WritePostSlice from '../components/WritePost/WritePostSlice';
import UserSlice from '../components/User/UserSlice';
import { mapReducer } from '../components/Map/mapSlice';
import { baseSplitApi } from './baseApi';

const store = configureStore({
  reducer: {
    map: mapReducer,
    CommunitySlice,
    WritePostSlice,
    UserSlice,
    [baseSplitApi.reducerPath]: baseSplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseSplitApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
