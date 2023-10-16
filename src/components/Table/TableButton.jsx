import './Table.css';

function TableButton({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}>New item</button>
  )
}

export default TableButton;