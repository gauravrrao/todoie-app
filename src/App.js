
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Button from './components/Button';

function App() {
  return (
    <div className='main'>
     <Header />
     <Product title="Eat"/>
     <Product title="Sleep"/>
     <Product title="Play"/>
     <Product title="Watch"/>
     <Product title="Buy"/>
     <Button />
    </div>
  );
}

export default App;
