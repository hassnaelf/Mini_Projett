import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import React ,{Component} from 'react';
import Navbar from "./navbar"
import ExercisesList from "./filiere-list.component";
import EditExercise from "./edit-filiere.component";
import CreateExercise from "./create-filiere.component";
import CreateUser from "./create-formation.component";
//import home from './home'

class Gestionfeliere  extends Component{
    render(){
        
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/gestionfeliere" exact component={ExercisesList} />
      
      <Route path="/gestionfeliere/edit/:id" component={EditExercise} />
      <Route path="/gestionfeliere/create" component={CreateExercise} />
      <Route path="/gestionfeliere/user" component={CreateUser} />
      
      
      </div>
    </Router>
  );
    }


}

export default Gestionfeliere;