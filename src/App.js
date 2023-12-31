import React from 'react';
import './App.css'
import { HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Navigation from './components/Navigation';
import Deatil from './routes/Detail';

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path = "/" exact = {true} component = {Home} />
      <Route path = "/about" component = {About} />
      <Route path = "/movie-detail" component = {Deatil} />
    </HashRouter>
  );
}

export default App;