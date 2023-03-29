import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import HotelCard from "@c/HotelCard/HotelCard";
import HotelsCardsList from "@c/HotelsCardsList/HotelsCardsList";

import { getPrettyDate } from "@/utils/formatDate";
import { declineWord } from "@/utils/declineWord";

import {
  selectHotelsData,
  selectFavoriteHotels,
  updateFavoriteHotels,
  selectSearchingParams,
  selectCityImages,
} from "@/store/hotelsSlice";

import "@splidejs/react-splide/css";
import "./ResultsCardContent.css";

export default function ResultsCardContent() {
  const hotels = useSelector(selectHotelsData);
  const favoriteHotels = useSelector(selectFavoriteHotels);
  const searchingParams = useSelector(selectSearchingParams);
  const cityimages = useSelector(selectCityImages);
  const dispatch = useDispatch();

  const splideOptions = {
    type: "loop",
    drag: "free",
    fixedWidth:'164px',
    gap: '12px',
    pagination: false,
    arrows: false,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: false,
      speed: 0.3,
    },
  };

  const hotelsCards = hotels?.map((hotel) => {
    return (
      <li key={hotel.hotelId} className="card-list__item">
        <HotelCard
          name={hotel.hotelName}
          date={getPrettyDate(hotel.queryParams.checkIn)}
          duration={hotel.queryParams.duration}
          rating={hotel.stars}
          price={hotel.priceFrom}
          isFavorite={hotel.isFavorite}
          handleLike={() => {
            dispatch(updateFavoriteHotels(hotel));
          }}
        ></HotelCard>
      </li>
    );
  });

  return (
    <>
      <div className="results__heading">
        <div className="title-wrapper">
          <h2 className="heading__title">Отели</h2>
          <p className="results__city">{searchingParams.location}</p>
        </div>
        <time className="results__date" dateTime={searchingParams.date}>
          {getPrettyDate(searchingParams.date)}
        </time>
      </div>

      <Splide
        aria-label="Фотографии города"
        options={splideOptions}
        extensions={{ AutoScroll }}
      >
        {cityimages.map((image) => {
          return (
            <SplideSlide>
              <img src={image} alt="Фотография города" />
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="favorites-info-wrapper">
        <p className="favorites-info">
          Добавлено в Избранное:
          <span className="favorites-count">{favoriteHotels.length}</span>{" "}
          {declineWord(favoriteHotels.length, ["отель", "отеля", "отелей"])}
        </p>
      </div>
      {hotels.length === 0 ? (
        <p className="result-caption">Отелей нет</p>
      ) : (
        <HotelsCardsList>{hotelsCards}</HotelsCardsList>
      )}
    </>
  );
}
