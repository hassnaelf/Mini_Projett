import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import React ,{Component} from 'react';
import Navbar from "../components/navbar"
import FiliereList from "../components/filiere-list.component";
import EditFiliere from "../components/edit-filiere.component";
import CreateFiliere from "../components/create-filiere.component";
import CreateFormation from "../components/create-formation.component";
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
      <Route path="/gestionfeliere/user" component={CreateFormation} />
      
      
      </div>
    </Router>
  );
    }


}

export default Gestionfeliere;