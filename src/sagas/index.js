import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchHotels } from '@/api'
import { getHotels } from '../store/hotelsSlice';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* workerFetchHotels(action) {
  const hotels = yield call(fetchHotels, action.payload);
  yield put(getHotels(hotels.map((hotel) => { return ({ ...hotel, queryParams: { ...action.payload } }) })));
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* watchDetachHotels() {
  yield takeLatest("HOTELS_FETCH_REQUESTED", workerFetchHotels);
}

export default function* mySaga() {
  yield watchDetachHotels();
}
