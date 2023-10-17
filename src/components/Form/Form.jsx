import './Form.css';

function Form({ onClose }) {
  return (
    <form className="form" action="#">
      <div className="form__row">
        <label htmlFor="title">
          <span>Title</span>
        </label>
        <input type="text" name="title" id="title" required/>
      </div>

      <div className="form__row">
        <label htmlFor="price">
          <span>Price</span>
        </label>
        <input type="number" name="price" id="price" required />
      </div>

      <div className="form__row">
        <label htmlFor="date">
          <span>Date and Time</span>
        </label>
        <input type="text" name="date" id="date" required />
      </div>


      <div className="form__btn-block">
        <button className="form__btn_close" onClick={onClose}>close</button>
        <button className="form__btn_add" onClick={onClose}>add</button>
      </div>
    </form>
  )
}

export default Form;