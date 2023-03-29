import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hotelsData: [],
  favoriteHotels: [],
  searchingParams: {}
}

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    updateFavoriteHotels: (state, action) => {
      console.log(state.favoriteHotels)
      state.hotelsData = state.hotelsData.map(hotel => {
        if (hotel.hotelId === action.payload.hotelId) {
          hotel.isFavorite = !hotel.isFavorite
          console.log(hotel.isFavorite)
          if (hotel.isFavorite) {
            console.log(2222)
            state.favoriteHotels = [...state.favoriteHotels, hotel]
          }
          else {
            console.log(1111)
            console.log(hotel.isFavorite)
            state.favoriteHotels = state.favoriteHotels.filter(h => h.isFavorite)
          }
        }
        return hotel
      })


    },
    updateSearchingParams: (state, action) => {
      state.searchingParams = {...state.searchingParams, ...action.payload}
    },
    getHotels: (state, action) => {
      state.hotelsData = action.payload;
      console.log(state.hotelsData.hotels)
    }
  }
})

export const { updateFavoriteHotels, updateSearchingParams, getHotels } = hotelsSlice.actions;

export const selectHotelsData = (state) => state.hotels.hotelsData;
export const selectFavoriteHotels = (state) => state.hotels.favoriteHotels;
export const selectSearchingParams = (state) => state.hotels.searchingParams;

export default hotelsSlice.reducer;
