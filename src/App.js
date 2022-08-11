import Slider from './components/slider/Slider'
import Header from './components/header/Header'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Clients from './components/clients/Clients'
import './App.css';

function App() {
  return (
     <>
      <Header/> 
      <Slider/>
      <About/>
      <Gallery/>
      <Clients/>
     </>
  );
}

export default App;
