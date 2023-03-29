import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPrettyDate } from "@/utils/formatDate";
import HotelCard from "@c/HotelCard/HotelCard";
import HotelsCardsList from "@c/HotelsCardsList/HotelsCardsList";

import "./FavoritesCardContent.css";
import { selectFavoriteHotels, updateFavoriteHotels, selectSearchingParams } from "@/store/hotelsSlice";

export default function FavoritesCardContent() {

  const [sortAscending, setSortAscending] = useState(true);
  const [sortMethod, setSortMethod] = useState("byRating");
  const [sortedHotels, setSortedHotels] = useState([]);

  const favoriteHotels = useSelector(selectFavoriteHotels);
  const searchingParams = useSelector(selectSearchingParams);
  const dispatch = useDispatch();

  /**
   * Если нажимается клавиша активного метода сортировки, то переключаем способ с возрастания на убывание и наоборот
   */
  const toggleSortAscending = (event) => {
    if (event.currentTarget.previousSibling.checked)
      setSortAscending(!sortAscending);
  };

  /**
   * Переключаем метод сортировки (по цене или по рейтингу)
   */
  const toggleMethod = (event) => {
    setSortMethod(event.target.value);
  };

  useEffect(() => {
    if (sortMethod === "byPrice") {
      if (sortAscending)
        setSortedHotels(
          [...favoriteHotels].sort((a, b) => (a.priceFrom >= b.priceFrom ? 1 : -1))
        );
      else
        setSortedHotels(
          [...favoriteHotels].sort((a, b) => (a.priceFrom <= b.priceFrom ? 1 : -1))
        );
    }
    if (sortMethod === "byRating") {
      if (sortAscending)
        setSortedHotels(
          [...favoriteHotels].sort((a, b) => (a.stars >= b.stars ? 1 : -1))
        );
      else
        setSortedHotels(
          [...favoriteHotels].sort((a, b) => (a.stars <= b.stars ? 1 : -1))
        );
    }
  }, [sortMethod, sortAscending, favoriteHotels]);

  const hotelsCards = sortedHotels.map((hotel) => {
    return (
      <li key={hotel.hotelId} className="card-list__item">
        <HotelCard
          name={hotel.hotelName}
          date={getPrettyDate(hotel.queryParams.checkIn)}
          duration={hotel.queryParams.duration}
          rating={hotel.stars}
          price={hotel.priceFrom}
          noImage
          handleLike={() => dispatch(updateFavoriteHotels(hotel))}
          isFavorite={hotel.isFavorite}
        ></HotelCard>
      </li>
    );
  });

  return (
    <>
      <h2 className="favorites__title">Избранное</h2>

      <ul className="sort-buttons">
        <li>
          <input
            className="radio"
            type="radio"
            name="sort"
            id="2"
            value="byRating"
            checked={sortMethod === "byRating" ? true : false}
            onChange={toggleMethod}
          />
          <label
            tabIndex="1"
            className="filterButton"
            htmlFor="2"
            onClick={toggleSortAscending}
          >
            Рейтинг{" "}
            <div
              className={`indicator ${
                sortAscending ? "indicator-top" : "indicator-bottom"
              }`}
            ></div>
          </label>
        </li>
        <li>
          <input
            className="radio"
            type="radio"
            name="sort"
            id="1"
            value="byPrice"
            checked={sortMethod === "byPrice" ? true : false}
            onChange={toggleMethod}
          />
          <label
            tabIndex="1"
            className="filterButton"
            htmlFor="1"
            onClick={toggleSortAscending}
          >
            Цена{" "}
            <div
              className={`indicator ${
                sortAscending ? "indicator-top" : "indicator-bottom"
              }`}
            ></div>
          </label>
        </li>
      </ul>
      {favoriteHotels.length === 0
        ? <p className="favorites__list-caption">Пока тут пусто, но Вы можете это исправить</p>
        : <HotelsCardsList>{hotelsCards}</HotelsCardsList>
      }

    </>
  );
}
