import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicos from './components/pages/Servicos';
import Produtos from './components/pages/Produtos';
import NovoUsuario from './components/pages/NovoUsuario';
import NaoEncontrado from './components/pages/NaoEncontrado';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Inicio} />
          <Route exact path='/servicos' component={Servicos} />
          <Route exact path='/produtos' component={Produtos} />
          <Route exact path='/novo' component={NovoUsuario} />
          <Route component={NaoEncontrado} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
