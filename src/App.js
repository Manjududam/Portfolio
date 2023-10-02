import { React } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
// import Portfolio from './components/Portfolio';
// import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/contact">
            {/* <Contact />  */}
          </Route>
        </Switch>


    </Router>


    </>

  );
}

export default App;
