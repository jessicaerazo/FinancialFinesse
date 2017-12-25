import React, { Component } from 'react';

import Navigation from './components/navigation';
import Header from './components/header';
import Testimonials from './components/testimonials';
import Benefits from './components/benefits';
import Coaches from './components/coaches';
import About from './components/about';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Testimonials />
        <Benefits />
        <Coaches />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
