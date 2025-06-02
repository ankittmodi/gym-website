
import './App.css';
import Footer from './components/footer/Footer';
import Herosection from './components/Herosection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Program from './components/program/Program';
import Reason from './components/reason/Reason';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Herosection/>
      <Program/>
      <Reason/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
