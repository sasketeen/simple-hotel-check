import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";
import './SearchForm.css'
import { getCurrentDate } from "@/utils/getCurrentDate";

export default function SearchForm({city, date, duration}) {
  return (
    <form noValidate className="search-form" aria-label="Поиск отелей">
      <Input id="location" label="Локация" value={city} labelBold />
      <Input
        id="start-date"
        type="date"
        min={getCurrentDate()}
        value={date}
        label="Дата заселения"
        labelBold
      />
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
  );
}
