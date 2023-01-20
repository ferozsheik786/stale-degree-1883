import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Landingpage from './Product-Page/Landingpage';
import AllRouters from './Routers/AllRouters';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
 
     <Landingpage/>
     <Footer/>
     <AllRouters/>
    </div>
  );
}

export default App;