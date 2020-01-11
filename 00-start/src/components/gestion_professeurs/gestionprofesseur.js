import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import React ,{Component} from 'react';
import Navbar from "./navbar.component"
import profList from "./prof-list";
import Editprof from "./modifierprof";
import Createprof from "./ajouterprof";
import Creatematiere from "./ajoutermatiere";


class Gestionprof extends Component{
    render(){
        
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/gestionprof" exact component={profList} />
      
      <Route path="/gestionprof/edit/:id" component={Editprof} />
      <Route path="/gestionprof/create" component={Createprof} />
      <Route path="/gestionprof/user" component={Creatematiere} />
      
      
      </div>
    </Router>
  );
    }


}

export default Gestionprof;