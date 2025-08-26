import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import resumeReducer from './reducers/resumeReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
  },
});

export default store;
