import Counter from "./features/counter/Counter";
import Coin from './features/coin/Coin';
import Theme from './features/theme/Theme'

function App() {
  
  return (
    <div>
     <h1>Hello Redux</h1>
     <Counter />
     <Coin />
     <Theme />
    </div>
  );
}

export default App;
