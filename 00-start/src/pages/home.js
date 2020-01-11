import React,{Component} from 'react'
import './home.css';
import Navbar from '../components/nav.js';
import yy from '../images/estEssaouira.jpg'


 class Home extends Component
 {
     
     render()
     {
         return(
             <div>
                 <Navbar/>
                 <div>

                 <div class="overlay-image"><a href="URL_LIEN">
 <img class="image" src={yy} alt="Alt text" />
 <div class="normal">
  <div class="text">Bienvenue
  </div>
 </div>
 <div class="hover">
  <div class="text">Bienvenue
   EST ESSAOUIRA
   
   </div>
 </div>
</a></div>
                 </div>

            
              
           
             
           
           
            
           
            </div>
           
            

         )
     }
 }
 export default  Home;