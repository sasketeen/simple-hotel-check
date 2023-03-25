import Rating from "@c/Rating/Rating";
import house from "@/assets/icons/house.svg";
import "./HotelCard.css";
import { declineWord } from "@/utils/declineWord";

export default function HotelCard({
  name,
  date,
  duration,
  rating,
  price,
  noimage,
}) {
  return (
    <div className="hotel-card">
      {!noimage && (
        <div className="hotel-card__img-wrapper">
          <img
            className="hotel-card__img"
            src={house}
            alt="Изображение отеля"
          />
        </div>
      )}

      <div className="hotel-card__heading">
        <h3 className="hotel-card__title">{name}</h3>

        <div className="hotel-card__button-wrapper">
          <button
            aria-label="Добавить в избранное"
            className="hotel-card__like"
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 23 20"
              className="like-icon"
            >
              <path
                d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133V2.59133Z"
                fill="white"
                stroke="#C4C4C4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hotel-card__date-wrapper">
        <span className="hotel-card__date">{date}</span>
        <span className="hotel-card__duration">{`${duration} ${declineWord(
          duration,
          ["день", "дня", "дней"]
        )}`}</span>
      </div>

      <div className="hotel-card__rating-wrapper">
        <Rating rating={rating}></Rating>
      </div>

      <div className="hotel-card____price-wrapper">
        <span className="hotel-card__price-title">Price:</span>
        <span className="hotel-card__price">{price}&nbsp;&#8381;</span>
      </div>
    </div>
  );
}
