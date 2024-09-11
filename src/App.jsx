import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pools from './components/Pools.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return ( 
    <div>
      <Header/>
      <Hero/>
      <Pools/>
      <Services/>
      <div className="flex flex-col md:flex-row bg-cyan-100">
        <div className="w-full md:w-1/2 p-4">
          <Testimonials/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
