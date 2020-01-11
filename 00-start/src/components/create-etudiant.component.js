import  React,{Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import   './etudiant.css';
import  axios  from 'axios';

class  FormulaaireInscription extends React.Component{


	constructor(props) {
        super(props);

        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom= this.onChangePrenom.bind(this);
        this.onChangeCIN= this.onChangeCIN.bind(this);
        this.onChangeCNE= this.onChangeCNE.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangeTel= this.onChangeTel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



		this.state = {
            Nom : '',
            Prenom : '',
            CIN : '',
            CNE : '',
            Tel : '',
            Email : ''
		 
		}
      }
      
      
    
	  //recuperer CIN
	  onChangePrenom=(e) =>{
		this.setState({
		  Prenom : e.target.value
		})
	  }
     // recuperer Nom
	  onChangeNom=(e)=>{
		  this.setState({
			  Nom : e.target.value
		  })
      }
      // recuperer CIN
      onChangeCIN=(e)=>{

         this.setState({
             CIN : e.target.value
         })

      }
      //recuperer CNE
      onChangeCNE=(e)=>{

        this.setState({
            CNE : e.target.value
        })
      }
      //recuperer  Email
      onChangeEmail=(e)=>{
          
        this.setState({
            Email : e.target.value
        })
      }

      //recupere  Tel
      onChangeTel=(e)=>{

        this.setState({
            Tel : e.target.value
        })
      }

	  onSubmit=(e)=>{
		e.preventDefault();
        const  data={
		Prenom : this.state.Prenom,
        Nom: this.state.Nom,
        CIN : this.state.CIN,
        CNE :this.state.CNE,
        Email :this.state.Email,
        Tel :this.state.Tel

       }

       axios.post('http://localhost:4000/etudiant/add', data)
	   .then(res => console.log(res.data));
       window.location = "/gestionetudiant";
       
    }
	  
	  

render(){

    return(
		<div  className="container">
        <div className="container-contact100">
        <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>
        
        <div className="wrap-contact100">
            <form className="contact100-form validate-form">
                <span className="contact100-form-title">
                   Inscription
                </span>
        
                <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <input className="input100"  name="nom" placeholder="NOM" 
							value={this.state.NOM} onChange={this.onChangeNOM} autoComplete="NOM" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
        
                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="prenom" placeholder="Prenom"  onChange={this.onChangePrenom} autoComplete="email" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="cin" placeholder="CIN"  onChange={this.onChangeCIN} autoComplete="cin" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="cne" placeholder="CNE"  onChange={this.onChangeCNE} autoComplete="cin" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="email" placeholder="Email"  onChange={this.onChangeEmail} autoComplete="email" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" name="tel" placeholder="Telephone"  onChange={this.onChangeTel} autoComplete="tel" required/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="container-contact100-form-btn ">
                    <button className="contact100-form-btn   "   onClick={this.onSubmit}  value="Login">
                      Sauvegarder
                    </button>
                </div>
            </form>
           
        </div>
        </div>
        </div>
                         
      
        );
}




}
export default   FormulaaireInscription;



 
        
        