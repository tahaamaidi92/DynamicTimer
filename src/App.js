import React, { Component } from 'react';
import Timer from './components/timer';
import './App.css'
class App extends Component {

  state = { 
    nombre:''
   }
  handleChange=(e)=>{
    if(e.target.value>=86400){
     e.target.value=this.state.nombre
     alert("S'il vous plaiez entrez un nombre inférieur a 86400 ");
    }else if(e.target.value<86400){
       this.setState({
        nombre:e.target.value 
       })
    }else{
      e.target.value=this.state.nombre
      alert("S'il vous plaiez entrez un nombre décimale");
    }

  }
  render() { 
    return ( 
      <div>
        <form className="form">
       
      <input type="text" placeholder="Ecrire un nombre" onChange={this.handleChange} id="g" required/>
      </form>
      <Timer nombres={this.state.nombre}/>
      </div>
      );
  }
}
 
export default App;