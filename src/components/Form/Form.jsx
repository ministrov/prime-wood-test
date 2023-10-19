import InputRow from '../InputRow/InputRow';
import './Form.css';

function Form({ onClose, onSumbit }) {

  const addItem = (event) => {
    event.preventDefault();
  }

  const onChange = (event) => {
    console.log(event.target.name);
  };


  return (
    <form className="form" action="#" onSubmit={onSumbit}>
      <InputRow label={'Title'} onChange={onChange} />
      <InputRow label={'Price'} type='number' onChange={onChange} />
      <InputRow label={'Date and Time'} onChange={onChange} />

      <div className="form__btn-block">
        <button className="form__btn_close" onClick={onClose}>close</button>
        <button className="form__btn_add" onClick={addItem}>add</button>
      </div>
    </form>
  )
}

export default Form;