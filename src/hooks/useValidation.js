import { useState } from "react";
/**
 * хук валидации
 * @returns {array} массив, содержащий обработчик ввода onChange,
 * объект ошибок полей errors, у которого ключами являются id полей ввода,
 * флаг валидности формы validity
 */
export default function useValidation() {
  const [errors, setErrors] = useState({});

  const handleValidation = ({ target }) => {
    const { id } = target;
    setErrors({ ...errors, [id]: target.validationMessage });
  };

  return [handleValidation, errors];
}
