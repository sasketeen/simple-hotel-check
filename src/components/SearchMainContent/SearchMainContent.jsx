import Card from "@c/Card/Card";
import SearchForm from "@c/Forms/SearchForm/SearchForm";
import FavoritesCardContent from "@c/FavoritesCardContent/FavoritesCardContent";
import ResultsCardContent from "@c/ResultsCardContent/ResultsCardContent";

import "./SearchMainContent.css";


export default function SearchMainContent() {

  return (
    <div className="content">
      <Card className="content__form-card">
        <SearchForm></SearchForm>
      </Card>

      <Card className="content__favorites favorites">
        <FavoritesCardContent />
      </Card>

      <Card className="content__results">
        <ResultsCardContent />
      </Card>
    </div>
  );
}
