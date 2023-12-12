import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch news articles from the Hacker News API.
export const fetchNewsArticles = createAsyncThunk(
  "articles/fetchNewsArticles",
  async () => {
    try {
      // Fetching the IDs of the top stories.
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      // Selecting a subset of top story IDs (e.g. 3).
      const topStoryIds = response.data.slice(0, 3);
      // Fetching detailed information for each top story.
      const newsPromises = topStoryIds.map((id) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      );
      // Waiting for all promises to resolve.
      const newsData = await Promise.all(newsPromises);
      // Extracting data from each response.
      const newsArticles = newsData.map((article) => article.data);
      // Returning the fetched news articles.
      return newsArticles;
    } catch (error) {
      // Throwing any encountered errors.
      throw error;
    }
  }
);
// Initial state for the articles slice of the Redux store.
const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

export const ArticleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  // Redux Toolkit extra reducers handling pending, fulfilled, and rejected states for the fetchNewsArticles async thunk.
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNewsArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllArticles = (state) => state.articles;

export default ArticleSlice.reducer;