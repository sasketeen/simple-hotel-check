import Card from "@c/Card/Card";
import SearchForm from "@c/Forms/SearchForm/SearchForm";
import FavoritesCardContent from "@c/FavoritesCardContent/FavoritesCardContent";
import ResultsCardContent from "@c/ResultsCardContent/ResultsCardContent";

import "./SearchMainContent.css";
import { useDispatch, useSelector } from "react-redux";
import { selectHotelsData } from "@/store/hotelsSlice";

import { useState } from "react";

export default function SearchMainContent() {

  const [city] = useState("Москва");

  // const hotels = useSelector(selectHotelsData);
  const dispatch = useDispatch()

  return (
    <div className="content">
      <Card className="content__form-card">
        <SearchForm></SearchForm>
      </Card>

      <Card className="content__favorites favorites">
        <FavoritesCardContent />
      </Card>

      <Card className="content__results">
        <ResultsCardContent city={city} />
      </Card>
    </div>
  );
}
