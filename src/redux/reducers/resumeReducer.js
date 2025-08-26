import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    resumes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchResumesRequest: (state) => {
      state.loading = true;
    },
    fetchResumesSuccess: (state, action) => {
      state.loading = false;
      state.resumes = action.payload;
    },
    fetchResumesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchResumesRequest, fetchResumesSuccess, fetchResumesFail } = resumeSlice.actions;
export default resumeSlice.reducer;
