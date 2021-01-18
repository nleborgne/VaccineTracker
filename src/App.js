import './App.css';
import Navbar from './components/Navbar.js';
import Vaccine from './components/Vaccine.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)


function App() {
  return (
    <div className="App">
      <Navbar />
      <Vaccine />
    </div>
  );
}

export default App;
