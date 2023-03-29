import { useState } from "react";

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setValues({ ...values, [id]: value });
  };
  return { values, setValues, handleChange };
}
