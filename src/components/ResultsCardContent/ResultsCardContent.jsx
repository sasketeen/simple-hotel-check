import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import HotelCard from "@c/HotelCard/HotelCard";
import HotelsCardsList from "@c/HotelsCardsList/HotelsCardsList";

import { getCurrentDate, getPrettyCurrentDate } from "@/utils/getCurrentDate";
import { declineWord } from "@/utils/declineWord";

import { selectHotelsData, selectFavoriteHotels, updateFavoriteHotels } from "@/store/hotelsSlice";


import "@splidejs/react-splide/css";
import "./ResultsCardContent.css";
import img1 from "@/assets/images/City-img1.png";

export default function ResultsCardContent({ city }) {

  const hotels = useSelector(selectHotelsData);
  const favoriteHotels = useSelector(selectFavoriteHotels);
  const dispatch = useDispatch();

  const splideOptions = {
    type: "loop",
    drag: "free",
    perPage: 3,
    pagination: false,
    arrows: false,
    gap: "12px",
    autoWidth: true,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: false,
      speed: 0.3
    }
  };

  const hotelsCards = hotels.map((hotel) => {
    return (
      <li key={hotel.hotelId} className="card-list__item">
        <HotelCard
          name={hotel.hotelName}
          date={getPrettyCurrentDate()}
          duration="20"
          rating={hotel.stars}
          price={hotel.priceFrom}
          isFavorite={hotel.isFavorite}
          handleLike={() => dispatch(updateFavoriteHotels(hotel))}
        ></HotelCard>
      </li>
    );
  });

  return (
    <>
      <div className="results__heading">
        <div className="title-wrapper">
          <h2 className="heading__title">Отели</h2>
          <p className="results__city">{city}</p>
        </div>
        <time className="results__date" dateTime={getCurrentDate()}>
          {getPrettyCurrentDate()}
        </time>
      </div>

      <Splide aria-label="Фотографии города" options={splideOptions} extensions={{ AutoScroll }}>
        <SplideSlide>
          <img src={img1} alt="Фотография города" />
        </SplideSlide>
        <SplideSlide>
          <img src={img1} alt="Фотография города" />
        </SplideSlide>
        <SplideSlide>
          <img src={img1} alt="Фотография города" />
        </SplideSlide>
      </Splide>

      <div className="favorites-info-wrapper">
        <p className="favorites-info">
          Добавлено в Избранное:
          <span className="favorites-count">{favoriteHotels.length}</span>{" "}
          {declineWord(hotels.length, ["отель", "отеля", "отелей"])}
        </p>
      </div>

      <HotelsCardsList>{hotelsCards}</HotelsCardsList>
    </>
  );
}
