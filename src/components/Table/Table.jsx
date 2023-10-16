import TableButton from './TableButton';
import './Table.css';

function TableMain() {

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__head">#</th>
            <th className="table__head">Title</th>
            <th className="table__head">Price, USD</th>
            <th className="table__head">Data and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table__row">
            <th scope='col' className="table__head">1</th>
            <th scope='col' className="table__head">Headphones</th>
            <th scope='col' className="table__head">10.00</th>
            <th scope='col' className="table__head">11.01.2021</th>
          </tr>

          <tr className="table__row">
            <th scope='col' className="table__head">2</th>
            <th scope='col' className="table__head">Mouse</th>
            <th scope='col' className="table__head">15.00</th>
            <th scope='col' className="table__head">12.01.2021</th>
          </tr>

          <tr className="table__row">
            <th scope='col' className="table__head">3</th>
            <th scope='col' className="table__head">Keyboard</th>
            <th scope='col' className="table__head">9.99</th>
            <th scope='col' className="table__head">12.01.2021</th>
          </tr>
        </tbody>
      </table>
      <TableButton className={'table-btn'} onClick={() => console.log('Clicked')}/>
    </div>
  )
}

export default TableMain;
