import { useState } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = (event) => {
    const target = event.target;

    if (target) setIsOpen(false);
  }

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center'}}>
      <div className="container">
        <div className="shadow-wrapper">
          <Header />
          <Table  setIsOpen={setIsOpen}/>
          <Modal open={isOpen} onClose={onCloseHandler}>
            <form action="">Form</form>
          </Modal>
        </div>
      </div>
    </main>
  )
}

export default App
