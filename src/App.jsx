import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pools from './components/Pools.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return ( 
    <div>
      <Header/>
      <Hero/>
      <Pools/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
