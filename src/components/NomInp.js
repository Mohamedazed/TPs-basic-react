import React,{Component} from 'react'

class HandlValInp extends Component{
  constructor(props){
    super(props)
    this.state = {
      nom : '',
      affichage : ''
    }
  }
  valueChange =(event)=>{
    this.setState({nom : event.target.value})
  }
  clicker =()=>{
    this.setState({affichage : this.state.nom})
  }
  render(){
    const {nom,affichage} = this.state
    return(
      <div style={{backgroundColor:'orange'}}>
        <h1 style={{color:'brown'}}> Affichage contenue input</h1>
        <input
        type='text'
        value={nom}
        onChange={this.valueChange}
        placeholder='ecrit votre nom'
        />
        <button onClick={this.clicker}>Afficher</button>
        <h5><p style={{backgroundColor:'brown'}}>Nom : {affichage}</p></h5>
      </div>
    )
  }

}
export default HandlValInp;