import { createSlice } from '@reduxjs/toolkit'
import img1 from '@/assets/images/City-img1.jpeg'
import img2 from '@/assets/images/City-img2.jpeg'
import img3 from '@/assets/images/City-img3.jpeg'
import img4 from '@/assets/images/City-img4.jpeg'

const initialState = {
  hotelsData: [],
  favoriteHotels: [],
  searchingParams: {},
  cityImg: [img1, img2, img3, img4]
}

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {

    updateFavoriteHotels: (state, action) => {
      state.hotelsData = state.hotelsData.map((hotel) => {
        if (hotel.hotelId === action.payload.hotelId) {
          hotel.isFavorite = !hotel.isFavorite;
          if (hotel.isFavorite) {
            state.favoriteHotels = [...state.favoriteHotels, hotel]
          }
          else {
            state.favoriteHotels = state.favoriteHotels.filter((favoriteHotel) => favoriteHotel.hotelId !== hotel.hotelId)
          }
        }
        return hotel
      })
    },

    updateSearchingParams: (state, action) => {
      state.searchingParams = { ...state.searchingParams, ...action.payload }
    },

    getHotels: (state, action) => {
      state.hotelsData = action.payload;
    }
  }
})

export const { updateFavoriteHotels, updateSearchingParams, getHotels } = hotelsSlice.actions;

export const selectHotelsData = (state) => state.hotels.hotelsData;
export const selectFavoriteHotels = (state) => state.hotels.favoriteHotels;
export const selectSearchingParams = (state) => state.hotels.searchingParams;
export const selectCityImages = (state) => state.hotels.cityImg;

export default hotelsSlice.reducer;
