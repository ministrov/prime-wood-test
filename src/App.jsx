import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './App.css';

function App() {

  return (
    <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center'}}>
      <div className="container">
        <div className="shadow-wrapper">
          <Header />
          <Table />
        </div>
      </div>
    </main>
  )
}

export default App
