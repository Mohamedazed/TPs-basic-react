import React,{useState} from 'react'

const Calculator =()=>{
  const [input,setInput] = useState('')
  const [res,setRes] = useState('')

  const handlV=(value)=>{
    setInput((prevState) => prevState+value)
  }
  const clear=()=>{
    setInput('')
    setRes('')
  }
  const calculer=()=>{
    try{
      setRes(eval(input).toString())
    }catch(error){
      setRes('error')
    }
  }
  return(
    <div style={{backgroundColor:'black'}}>
      <h1 style={{color:'cyan'}}>React Calculator</h1>
      <input type='text' value={input} readOnly/>
      <div>
        <button onClick={()=>handlV('1')}>1</button>
        <button onClick={()=>handlV('2')}>2</button>
        <button onClick={()=>handlV('3')}>3</button>
        <button onClick={()=>handlV('+')}>+</button>
      </div>
      <div>
        <button onClick={()=>handlV('4')}>4</button>
        <button onClick={()=>handlV('5')}>5</button>
        <button onClick={()=>handlV('6')}>6</button>
        <button onClick={()=>handlV('-')}>-</button>
      </div>
      <div>
        <button onClick={()=>handlV('7')}>7</button>
        <button onClick={()=>handlV('8')}>8</button>
        <button onClick={()=>handlV('9')}>9</button>
        <button onClick={()=>handlV('/')}>/</button>
      </div>
      <div>
        <button onClick={()=>handlV('0')}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculer}>=</button>
        <button onClick={()=>handlV('*')}>*</button>
      </div>
      <h5 style={{backgroundColor:'cyan'}}><p>Resultat : {res}</p></h5 >
    </div>
  )
}
export default Calculator

///////////////////////////////////////////////////

// import React,{Component} from 'react'
// export default class Calculator extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       input : '',
//       res : ''
//     }
//   }
//   handlV=(value)=>{
//     this.setState((prevState)=>({input : prevState.input+value}))
//   }
//   clear=()=>{
//     this.setState({
//       input:'',
//       res:''
//     })
//   }
//   calcule=()=>{
//     try{
//       this.setState({res:eval(this.state.input).toString()})
//     }catch(error){
//       this.setState({res:'error my friend'})
//     }
//   }
//   render(){
//     const {input,res} = this.state
//     return(
//       <div>
//         <input type='text' value={input} readOnly/>
//         <div>
//           <button onClick={()=>this.handlV('1')}>1</button>
//           <button onClick={()=>this.handlV('2')}>2</button>
//           <button onClick={()=>this.handlV('3')}>3</button>
//           <button onClick={()=>this.handlV('+')}>+</button>
//         </div>
//         <div>
//           <button onClick={()=>this.handlV('4')}>4</button>
//           <button onClick={()=>this.handlV('5')}>5</button>
//           <button onClick={()=>this.handlV('6')}>6</button>
//           <button onClick={()=>this.handlV('-')}>-</button>
//         </div>
//         <div>
//           <button onClick={()=>this.handlV('7')}>7</button>
//           <button onClick={()=>this.handlV('8')}>8</button>
//           <button onClick={()=>this.handlV('9')}>9</button>
//           <button onClick={()=>this.handlV('*')}>*</button>
//         </div>
//         <div>
//           <button onClick={()=>this.handlV('0')}>0</button>
//           <button onClick={this.clear}>C</button>
//           <button onClick={this.calcule}>=</button>
//           <button onClick={()=>this.handlV('/')}>/</button>
//         </div>
//         <h5><p>Result is : {res}</p></h5>
//       </div>
//     )
//   }
// }
