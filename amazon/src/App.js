import './App.css';
import Navbar from './Components/Navbar';
import Landingpage from './Product-Page/Landingpage';
import AllRouters from './Routers/AllRouters';

function App() {
  return (
    <div className="App">
      <Navbar/>
 
     <Landingpage/>
     <AllRouters/>
    </div>
  );
}

export default App;