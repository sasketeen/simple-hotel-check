import "./Input.css";

export default function Input({ id, label, labelBold, errorMessage, ...atrs }) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`label ${labelBold ? "label_type_bold" : ""}
          ${errorMessage ? "label_type_error" : ""}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`input ${errorMessage ? "input_type_error" : ""}`}
        {...atrs}
      ></input>
      {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>
  );
}
