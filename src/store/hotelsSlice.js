import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hotelsData: [
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 2,
      locationId: 12153,
      hotelId: 333561,
      priceFrom: 23.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 2,
      locationId: 12153,
      hotelId: 3323561,
      priceFrom: 23.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 2,
      locationId: 12153,
      hotelId: 331561,
      priceFrom: 23.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 2,
      locationId: 12153,
      hotelId: 313561,
      priceFrom: 23.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 2,
      locationId: 12153,
      hotelId: 3332561,
      priceFrom: 243.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 0,
      locationId: 12153,
      hotelId: 333562,
      priceFrom: 283.56,
      isFavorite: false,
    },
    {
      location: {
        country: "Russia",
        geo: {
          lon: 37.617508,
          lat: 55.752041,
        },
        state: null,
        name: "Moscow",
      },
      priceAvg: 60897.74,
      pricePercentile: {
        3: 28863.56,
        10: 28863.56,
        35: 47805.27,
        50: 59531.09,
        75: 65435,
        99: 120128.17,
      },
      hotelName: "Mercure Arbat Moscow",
      stars: 5,
      locationId: 12153,
      hotelId: 333563,
      priceFrom: 2883.56,
      isFavorite: false,
    },
  ],
  favoriteHotels: []
}

export const hotelsSice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    updateFavoriteHotels: (state, action) => {
      state.hotel = state.hotelsData.forEach(hotel => {
        if (hotel.hotelId === action.payload.hotelId) {
          hotel.isFavorite = !hotel.isFavorite
        }
      })
      state.favoriteHotels = state.hotelsData.filter(hotel => hotel.isFavorite)
    },
  }
})

export const { updateFavoriteHotels } = hotelsSice.actions;

export const selectHotelsData = (state) => state.hotels.hotelsData;
export const selectFavoriteHotels = (state) => state.hotels.favoriteHotels;

export default hotelsSice.reducer;
