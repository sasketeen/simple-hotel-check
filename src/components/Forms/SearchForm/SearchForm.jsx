import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

import { getCurrentDate } from "@/utils/getCurrentDate";
import useForm from "@/hooks/useForm";

import "./SearchForm.css";

export default function SearchForm() {
  const { values, handleChange } = useForm({
    location: "Москва",
    date: getCurrentDate(),
    duration: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.checkValidity()) console.log(values);
  }
  return (
    <form noValidate className="search-form" aria-label="Поиск отелей" onSubmit={handleSubmit}>
      <Input
        value={values.location}
        label="Локация"
        id="location"
        required
        labelBold
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <Input
        value={values.date}
        label="Дата заселения"
        id="date"
        type="date"
        min={getCurrentDate()}
        required
        labelBold
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <Input
        value={values.duration}
        label="Количество дней"
        id="duration"
        type="number"
        step="1"
        min="1"
        required
        pattern="^[ 0-9]+$"
        labelBold
        onChange={(event) => {
          handleChange(event);
        }}
      />

      <div className="submit-button__wrapper">
        <MainButton type="submit">Найти</MainButton>
      </div>
    </form>
  );
}
