import Input from "@/ui/Input/Input";
import MainButton from "@/ui/MainButton/MainButton";

import { getCurrentDate } from "@/utils/formatDate";
import useForm from "@/hooks/useForm";
import useValidation from "@/hooks/useValidation";

import "./SearchForm.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSearchingParams } from "@/store/hotelsSlice";
import { getFormatDate } from "../../../utils/formatDate";

export default function SearchForm() {
  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    location: "Москва",
    date: getCurrentDate(),
    duration: "1",
  });
  const [handleValidation, errors] = useValidation();

  const makeDispatch = () => {
    const date = new Date(values.date);

    //расчет даты выселения для запроса
    const checkOut = getFormatDate(
      new Date(date.setDate(date.getDate() + Number(values.duration)))
    );
    dispatch({
      type: "HOTELS_FETCH_REQUESTED",
      payload: {
        location: values.location,
        checkIn: values.date,
        checkOut: checkOut,
        duration: values.duration,
      },
    });
  }

  useEffect(() => {
    dispatch(updateSearchingParams(values));
    makeDispatch()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      makeDispatch()
    }
  };
  return (
    <form
      noValidate
      className="search-form"
      aria-label="Поиск отелей"
      onSubmit={handleSubmit}
    >
      <Input
        value={values.location}
        label="Локация"
        id="location"
        required
        labelBold
        errorMessage={errors.location}
        onChange={(event) => {
          handleChange(event);
          handleValidation(event);
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
        errorMessage={errors.date}
        onChange={(event) => {
          handleChange(event);
          handleValidation(event);
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
        labelBold
        errorMessage={errors.duration}
        onChange={(event) => {
          handleChange(event);
          handleValidation(event);
        }}
      />

      <div className="submit-button__wrapper">
        <MainButton type="submit">Найти</MainButton>
      </div>
    </form>
  );
}
