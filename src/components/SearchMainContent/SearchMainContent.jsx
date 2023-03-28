import Card from "@c/Card/Card";
import SearchForm from "@c/Forms/SearchForm/SearchForm";
import FavoritesCardContent from "@c/FavoritesCardContent/FavoritesCardContent";
import ResultsCardContent from "@c/ResultsCardContent/ResultsCardContent";

import "./SearchMainContent.css";

import { useState } from "react";

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
      stars: 2,
      locationId: 12153,
      hotelId: 3323561,
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
      stars: 2,
      locationId: 12153,
      hotelId: 331561,
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
      stars: 2,
      locationId: 12153,
      hotelId: 313561,
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
      stars: 2,
      locationId: 12153,
      hotelId: 3332561,
      priceFrom: 243.56,
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

  const [city, setCity] = useState("Москва");
  // const [date, setDate] = useState(getCurrentDate());
  // const [duration, setDuration] = useState(1);

  return (
    <div className="content">
      <Card className="content__form-card">
        <SearchForm></SearchForm>
      </Card>

      <Card className="content__favorites favorites">
        <FavoritesCardContent hotels={hotels} />
      </Card>

      <Card className="content__results">
        <ResultsCardContent hotels={hotels} city={city} />
      </Card>
    </div>
  );
}
