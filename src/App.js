import './App.css';
import Rotas from './Routes/Rotas';
import { UserProvider } from './components/useContext/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <Rotas/>
      </UserProvider>
      
    </div>
  );
}

export default App;
