import './InputRow.css';

function InputRow({ isValid, type = 'text', required = true, label, ...props }) {

  return (
    <div className="input-row">
      <label htmlFor={label}>
        <span>{label}</span>
      </label>
      <input {...props} type={type} className={{
        ['invalid']: !isValid
      }} required={required}/>
    </div>
  )
}

export default InputRow;