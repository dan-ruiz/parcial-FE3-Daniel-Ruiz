import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import "../styles/Form.css";

const Form = () => {
  const [customer, setCustomer] = useState({ name: "", movie: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [submittedCustomer, setSubmittedCustomer] = useState(null);

  const handleChangeName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleChangeMovie = (e) => {
    setCustomer({ ...customer, movie: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer.name.trim().length > 3 && customer.movie.trim().length > 6) {
      setShow(true);
      setError(false);
      setSubmittedCustomer(customer);
      setCustomer({ name: "", movie: "" }); // Reset form
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            value={customer.name}
            onChange={handleChangeName}
          />
          <label>¿Cuál es tu película favorita?: </label>
          <input
            type="text"
            value={customer.movie}
            onChange={handleChangeMovie}
          />
          <Button />
        </form>
      </div>

      {show && submittedCustomer && <Card customer={submittedCustomer} />}

      {error && (
        <h4 className="error-message">
          Por favor chequea que la información sea correcta
        </h4>
      )}
    </>
  );
};

export default Form;
