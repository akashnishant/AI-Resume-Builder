import axios from 'axios';
import { fetchResumesRequest, fetchResumesSuccess, fetchResumesFail } from '../reducers/resumeReducer';

export const fetchResumes = () => async (dispatch) => {
  try {
    dispatch(fetchResumesRequest());

    const { data } = await axios.get('http://localhost:5000/api/resumes');
    dispatch(fetchResumesSuccess(data));
  } catch (error) {
    dispatch(fetchResumesFail(error.response?.data?.message || error.message));
  }
};
