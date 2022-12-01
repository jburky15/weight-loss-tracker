import './App.css';
import { AddChange } from './components/AddChange';
import { GainsLosses } from './components/GainsLosses';
import { Header } from './components/Header';
import { Total } from './components/Total';
import { WeightChangesList } from './components/WeightChangesList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Total />
        <GainsLosses />
        <WeightChangesList />
        <AddChange />
      </div>
      
    </GlobalProvider>
  );
}

export default App;