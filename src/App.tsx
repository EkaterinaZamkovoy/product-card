import './App.css';
import { ProductCard } from './components';
import img from '/public/img/coffee.webp';

function App() {
  return (
    <main className='main'>
      <ProductCard
        title='Кофе из Колумбии'
        origin='Колумбия'
        price={34900}
        currency='RUB'
        imageUrl={img}
      />
    </main>
  );
}

export default App;
