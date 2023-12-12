import {configureStore} from "@reduxjs/toolkit";
import imageCardSlice from "../features/ImageCard/imageCardSlice";
import ArticleSlice from "../features/Articles/ArticleSlice";
import EmailSlice from "../features/Email/EmailSlice";

export const store = configureStore({
    reducer :{
        imageCard: imageCardSlice,
        articles: ArticleSlice,
        email: EmailSlice,
    }
})