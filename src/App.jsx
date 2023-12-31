import { useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useLocalStorage('data');

  const onCloseHandler = (event) => {
    const target = event.target;

    if (target) setIsOpen(false);
  }

  const addItem = (event) => {
    console.log(items, setItems);
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData.entries()));
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
