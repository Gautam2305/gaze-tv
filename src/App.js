import './App.css';

import { RouterPath } from './utils/routes';
import { Home } from './pages/index';
function App() {
  return (
    <div className="App">
      <RouterPath>
        <Home/>
      </RouterPath>
    </div>
  );
}

export default App;
