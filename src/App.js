import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Allroutes from './pages/Allroutes';
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
