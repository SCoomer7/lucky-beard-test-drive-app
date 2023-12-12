import {createSlice} from "@reduxjs/toolkit";

// Initial state for the ImageCard slice of the Redux store.
const initialState = [
  {
    id:1,
    image:'./images/person-icon-blue.png',
    heading: 'Verified Buyers',
    description: 'Secure and verified registration',
  },
  {
    id:2,
    image:'./images/person-icon-blue.png',
    heading: 'No Time Wasters',
    description: 'Buyers undergo a credit check before being able to book a test drive',
  },
  {
    id:3,
    image:'./images/person-icon-blue.png',    
    heading: 'Scheduling',
    description: 'Set test drive scheduling',
  },
  {
    id:4,
    image:'./images/person-icon-blue.png',    
    heading: 'Easy Upload',
    description: 'Add a car ad in minutes via our extensive database of car models',
  },
  {
    id:5,
    image:'./images/person-icon-blue.png',    
    heading: 'Geo-Located',
    description: 'Notifications to Geo-located opportunities',
  },
  {
    id:6,
    image:'./images/person-icon-blue.png',    
    heading: 'Chat in a Tap',
    description: 'Direct messaging with buyers',
  },
]

export const imageCardSlice = createSlice({
    name: 'imageCard',
    initialState,
    reducer: {}
})

export const selectAllImageCards = (state) => state.imageCard
export default imageCardSlice.reducer;