import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import React ,{Component} from 'react';
import Navbar from "./navbar"
import FiliereList from "./filiere-list.component";
import EditFiliere from "./edit-filiere.component";
import CreateFiliere from "./create-filiere.component";
import CreateFormation from "./create-formation.component";
//import home from './home'

class Gestionfeliere  extends Component{
    render(){
        
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/gestionfeliere" exact component={FiliereList} />
      
      <Route path="/gestionfeliere/edit/:id" component={EditFiliere} />
      <Route path="/gestionfeliere/create" component={CreateFiliere} />
      <Route path="/gestionfeliere/formation" component={CreateFormation} />
      
      
      </div>
    </Router>
  );
    }


}

export default Gestionfeliere;