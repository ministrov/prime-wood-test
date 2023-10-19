import InputRow from '../InputRow/InputRow';
import './Form.css';

function Form({ onClose, onSumbit }) {

  const addItem = (event) => {
    event.preventDefault();
  }

  const onChange = (event) => {
    console.log(event.target.value);
  };


  return (
    <form className="form" action="#" onSubmit={onSumbit}>
      <InputRow label={'Title'} name={'title'} onChange={onChange} placeholder={'Title'}/>
      <InputRow label={'Price'} name={'price'} type='number' onChange={onChange} placeholder={'Price'}/>
      <InputRow label={'Date and Time'} name={'date'} onChange={onChange} placeholder={'Date and Time'}/>

      <div className="form__btn-block">
        <button className="form__btn_close" onClick={onClose}>close</button>
        <button className="form__btn_add" onClick={addItem}>add</button>
      </div>
    </form>
  )
}

export default Form;