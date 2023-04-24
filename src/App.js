//import logo from './logo.svg';
import './index.css';
import Form from './components/Form';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Transaction from './components/Transaction';

function App() {
  return (
    <div className="App">
     <Header />
     <SearchBar />
     <Form />
     <Transaction />
    </div>
  );
}

export default App;
