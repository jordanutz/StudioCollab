import React from 'react';
import './App.scss';
import routes from './routes';

// Components
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        {routes}
      </main>
      <Footer />
    </div>
  );
}

export default App;
