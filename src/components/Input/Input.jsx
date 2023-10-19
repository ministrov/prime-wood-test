import './Input.css';

function Input({ isValid = true, label, ...props }) {

  return (
    <div className="input-row">
      <label htmlFor={label}>
        <span>{label}</span>
      </label>
      <input {...props} className={{
        ['invalid']: !isValid
      }}/>
    </div>
  )
}

export default Input;