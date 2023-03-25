import Card from "../Card/Card";
import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";
import "./SearchMainContent.css";
import { useEffect, useState } from "react";
import { getCurrentDate } from "../../utils/getCurrentDate";

export default function SearchMainContent() {

  const [hotels, setHotels] = useState([
    { name: 1, _id: 10, price: 3, rating: 1 },
    { name: 2, _id: 21, price: 6, rating: 2 },
    { name: 3, _id: 332, price: 1, rating: 3 },
  ]);

  const [sortedHotels, setSortedHotels] = useState([]);

  const [sortAscending, setSortAscending] = useState(true);
  const [sortMethod, setSortMethod] = useState("byRating");

  const [city, setCity] = useState('Москва')
  const [date, setDate] = useState(getCurrentDate());
  const [duration, setDuration] = useState(1);
  const togleSortAscending = (event) => {
    if (event.currentTarget.previousSibling.checked)
      setSortAscending(!sortAscending);
  };

  const togleMethod = (event) => {
    setSortMethod(event.target.value);
  };

  const handleDate = (event) => {
    console.log(event.target.value)
  }

  useEffect(() => {
    setSortedHotels(hotels.slice());
    if (sortMethod === "byPrice") {
      if (sortAscending)
        setSortedHotels(
          [...hotels].sort((a, b) => (a.price >= b.price ? 1 : -1))
        );
      else
        setSortedHotels(
          [...hotels].sort((a, b) => (a.price <= b.price ? 1 : -1))
        );
    }
    if (sortMethod === "byRating") {
      if (sortAscending)
        setSortedHotels(
          [...hotels].sort((a, b) => (a.rating >= b.rating ? 1 : -1))
        );
      else
        setSortedHotels(
          [...hotels].sort((a, b) => (a.rating <= b.rating ? 1 : -1))
        );
    }
  }, [sortMethod, sortAscending, hotels]);

  const hotelsCards = sortedHotels.map((hotel) => {
    return (
      <li key={hotel._id}>
        <div>{hotel.name}</div>
      </li>
    );
  });

  return (
    <div className="content">
      <Card className="content__form-card">
        <form
          noValidate
          className="content__search-form"
          aria-label="Поиск отелей"
        >
          <Input id="location" label="Локация" value={city} labelBold />
          <Input id="start-date" type="date" min={getCurrentDate()} value={date} label="Дата заселения" labelBold onChange={handleDate}/>
          <Input
            value={duration}
            id="duration"
            type="number"
            step="1"
            min="1"
            pattern="^[ 0-9]+$"
            label="Количество дней"
            labelBold
          />
          <div className="submit-button__wrapper">
            <MainButton type="submit">Найти</MainButton>
          </div>
        </form>
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
      <Card className="content__results"></Card>
    </div>
  );
}
