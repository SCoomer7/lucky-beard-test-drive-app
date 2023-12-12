import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from '@emailjs/browser';


// Async thunk for sending an email using emailjs API, handling success and error cases
export const sendEmail = createAsyncThunk(
  "email/sendEmail",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await emailjs.sendForm(
        "service_4lm5zqi",
        "template_plkl4ix",
        formData,
        "10cgzdto55TuL6reL"
      );
      return result.text;
    } catch (error) {
      return rejectWithValue(error.text);
    }
  }
);

// Initial state for the email slice of the Redux store.
const initialState = {
  status: "idle",
  message: "",
  error: "",
};

export const EmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
// Redux Toolkit extra reducers handling pending, fulfilled, and rejected states for the sendEmail async thunk.
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = "";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.message = "";
      });
  },
});

export const selectEmailState = (state) => state.email;

export default EmailSlice.reducer;