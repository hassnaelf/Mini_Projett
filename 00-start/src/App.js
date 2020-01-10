import React from 'react';
//import home from './home.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Gestionfeliere from './components/gestionfeliere.js';




function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Route path="/gestionfeliere" exact component={Gestionfeliere} />
      </div>
    </Router>
  );
}

export default App;