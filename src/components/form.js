// import React,{Component} from 'react'

// export default class Formulaire extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             nom : '',
//             email : '',
//             affN : '',
//             affE : '',
//             buttonClicked : false
//         }
//     }
//     Pnom =(e)=>{
//         this.setState({nom:e.target.value})
//     }
//     Pemail =(e)=>{
//         this.setState({email:e.target.value})
//     }
//     affiche =(e)=>{
//         e.preventDefault();
//         const regx = /^[^\s@]+@+[^\s@]+\.[com]+$/;
//         if(regx.test(this.state.email)){
//             this.setState({affN:this.state.nom, affE:this.state.email, buttonClicked: true})
//         }
        
//     }
//     render(){
//         const {nom,email,affN,affE,buttonClicked } = this.state
//         return(
//             <div>
//                 <form onSubmit={this.affiche}>
//                 <label>Nom : </label><input
//                     type='text'
//                     value={nom}
//                     onChange={this.Pnom}
//                     placeholder='saisir un nom'
//                 />
//                 <label>Email : </label><input
//                     type='email'
//                     value={email}
//                     onChange={this.Pemail}
//                     placeholder='saisir un email'
//                 />
//                 <button type='submit'>Afficher</button>
//                 </form>
//                 <div>
//                     {buttonClicked && this.state.nom !== '' ? 
//                             (<p style={{backgroundColor:'green',textAlign:'center'}}>Votre nom est {affN} </p>):
//                             buttonClicked && (<p style={{backgroundColor:'red',textAlign:'center'}}>il faut saisi votre nom</p>)
//                     }
//                     {buttonClicked && this.state.email !== '' ? 
//                             (<p style={{backgroundColor:'green',textAlign:'center'}}> Votre email est {affE}</p>):
//                             buttonClicked && (<p style={{backgroundColor:'red',textAlign:'center'}}>il faut saisi votre email</p>)
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

/////////////////////////////////////
import React,{useState} from 'react'

const Formulaire =()=>{
    const [nom,setNom] = useState('')
    const [email,setEmail] = useState('')
    const [affN,setAffN] = useState('')
    const [affE,setAffE] = useState('')
    const [btn ,setBtn] = useState(false)

    
    const Pnom=(e)=>{
        setNom(e.target.value)
    }
    const Pemail=(e)=>{
        setEmail(e.target.value)
    }
    const hundelsubmit=(e)=>{
        e.preventDefault()
        const regx = /^[^\s@]+@+[^\s@]+\.[com]+$/
        if(regx.test(email)){
            setAffE(email)
            setAffN(nom)
            setBtn(true)
        }
    }
    return(
        <div style={{backgroundColor:'red'}}>
            <h1 style={{color:'blue'}}>Formulaire</h1>
            <form onSubmit={hundelsubmit}>
                <label><strong>Nom :  </strong></label>
                <input
                type='text'
                value={nom}
                onChange={Pnom}
                placeholder='enter votre nom...'
                /><br></br>
                <label><strong>Email : </strong></label>
                <input
                type='email'
                value={email}
                onChange={Pemail}
                placeholder='enter votre email...'
                /><br></br>
                <button type='submit'>afficher</button>
            </form>
            <div>
                {btn&&nom !== ''?(<p style={{backgroundColor:'green',textAlign:'center'}}>votre nom est {affN}</p>):(btn&&<p style={{backgroundColor:'red',textAlign:'center'}}>il faut saisir un nom</p>)}
                {btn&&email !== ''?(<p style={{backgroundColor:'green',textAlign:'center'}}>votre email est {affE}</p>):(btn&&<p style={{backgroundColor:'red',textAlign:'center'}}>il faut saisir un email</p>)}
            </div>
        </div>
    )
}
export default Formulaire;