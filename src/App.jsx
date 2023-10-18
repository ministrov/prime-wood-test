import { useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import './App.css';
import Form from './components/Form/Form';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = (event) => {
    const target = event.target;

    if (target) setIsOpen(false);
  }

  const addItem = (item) => {
    console.log(item);
  }

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center'}}>
      <div className="container">
        <div className="shadow-wrapper">
          <Header />
          <Table  setIsOpen={setIsOpen}/>
          <Modal open={isOpen} onClose={onCloseHandler}>
            <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid lightgray', paddingLeft: '1rem', paddingRight: '1rem' }}>
              <h2>New Item</h2>
              <button onClick={onCloseHandler}>X</button>
            </header>
            <Form onSumbit={addItem} onClose={onCloseHandler}/>
          </Modal>
        </div>
      </div>
    </main>
  )
}

export default App
