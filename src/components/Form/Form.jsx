import { useReducer } from 'react';
import { INITIAL_STATE, formReducer } from './Form.state';
import './Form.css';

function Form({ onClose, onSumbit }) {

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, values, isFormReadyToSubmit} = formState;

  const addItem = (event) => {
    event.preventDefault();

    console.log(event);
    console.log(isValid);
    console.log(values);
    console.log(dispatchForm);
    console.log(isFormReadyToSubmit);
  }

  return (
    <form className="form" action="#" onSubmit={onSumbit}>
      <div className="form__row">
        <label htmlFor="title">
          <span>Title</span>
        </label>
        <input type="text" name="title" id="title" value={values.title} required/>
      </div>

      <div className="form__row">
        <label htmlFor="price">
          <span>Price</span>
        </label>
        <input type="number" name="price" id="price" value={values.price} required />
      </div>

      <div className="form__row">
        <label htmlFor="date">
          <span>Date and Time</span>
        </label>
        <input type="text" name="date" id="date" value={values.date} required />
      </div>


      <div className="form__btn-block">
        <button className="form__btn_close" onClick={onClose}>close</button>
        <button className="form__btn_add" onClick={addItem}>add</button>
      </div>
    </form>
  )
}

export default Form;