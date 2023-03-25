import Card from "@c/Card/Card";
import SearchForm from "@c/Forms/SearchForm/SearchForm";
import "./SearchMainContent.css";
import { useEffect, useState } from "react";
import { getCurrentDate, getPrettyCurrentDate } from "@/utils/getCurrentDate";
import HotelCard from "../HotelCard/HotelCard";

export default function SearchMainContent() {
  const [hotels, setHotels] = useState([
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
    },
  ]);

  const [sortedHotels, setSortedHotels] = useState([]);

  const [sortAscending, setSortAscending] = useState(true);
  const [sortMethod, setSortMethod] = useState("byRating");

  const [city, setCity] = useState("Москва");
  const [date, setDate] = useState(getCurrentDate());
  const [duration, setDuration] = useState(1);

  const togleSortAscending = (event) => {
    if (event.currentTarget.previousSibling.checked)
      setSortAscending(!sortAscending);
  };

  const togleMethod = (event) => {
    setSortMethod(event.target.value);
  };

  useEffect(() => {
    if (sortMethod === "byPrice") {
      if (sortAscending)
        setSortedHotels(
          [...hotels].sort((a, b) => (a.priceFrom>= b.priceFrom ? 1 : -1))
        );
      else
        setSortedHotels(
          [...hotels].sort((a, b) => (a.priceFrom <= b.priceFrom ? 1 : -1))
        );
    }
    if (sortMethod === "byRating") {
      if (sortAscending)
        setSortedHotels(
          [...hotels].sort((a, b) => (a.stars >= b.stars ? 1 : -1))
        );
      else
        setSortedHotels(
          [...hotels].sort((a, b) => (a.stars <= b.stars ? 1 : -1))
        );
    }
  }, [sortMethod, sortAscending, hotels]);

  const hotelsCards = sortedHotels.map((hotel) => {
    return (
      <li key={hotel.hotelId}>
        <HotelCard
          name={hotel.hotelName}
          date={getPrettyCurrentDate()}
          duration="20"
          rating={hotel.stars}
          price={hotel.priceFrom}
          noimage
        ></HotelCard>
      </li>
    );
  });

  return (
    <div className="content">
      <Card className="content__form-card">
        <SearchForm city={city} date={date} duration={duration}></SearchForm>
      </Card>
      <Card className="content__favorites favorites">
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
              onChange={togleMethod}
            />
            <label
              tabIndex="1"
              className="filterButton"
              htmlFor="2"
              onClick={togleSortAscending}
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
              onChange={togleMethod}
            />
            <label
              tabIndex="1"
              className="filterButton"
              htmlFor="1"
              onClick={togleSortAscending}
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

        <ul className="favorites-list">{hotelsCards}</ul>
      </Card>

      <Card className="content__results">
        <HotelCard
          name="AvadaCedavra"
          date={getPrettyCurrentDate()}
          duration="20"
          rating="1"
          price="4500"
        ></HotelCard>
      </Card>
    </div>
  );
}
