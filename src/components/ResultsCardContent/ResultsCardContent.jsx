import HotelCard from "@c/HotelCard/HotelCard";
import HotelsCardsList from "@c/HotelsCardsList/HotelsCardsList";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { getCurrentDate, getPrettyCurrentDate } from "@/utils/getCurrentDate";
import { declineWord } from "@/utils/declineWord";

import "./ResultsCardContent.css";
import img1 from "@/assets/images/City-img1.png";

export default function ResultsCardContent({ hotels, city }) {
  const splideOptions = {
    type: "loop",
    drag: "free",
    perPage: 3,
    pagination: false,
    arrows: false,
    gap: "12px",
    autoWidth: true,
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

      <Splide aria-label="Фотографии города" options={splideOptions}>
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
          <span className="favorites-count">{hotels.length}</span>{" "}
          {declineWord(hotels.length, ["отель", "отеля", "отелей"])}
        </p>
      </div>

      <HotelsCardsList>{hotelsCards}</HotelsCardsList>
    </>
  );
}
