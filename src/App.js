import React ,{ Component } from "react";

class tp extends Component{
  constructor(props){
    super(props)
    this.state = {num : 0}
  }
  inc = ()=>{
   this.setState({num : this.state.num+1})
  //  console.log(this.state.num)
  }
  dec = ()=>{
    this.setState({num : this.state.num-1})
    // console.log(this.state.num)
  }
  render(){
    return (
          <div style={{marginLeft:'40%',marginRight:'40%',marginTop:'100px',textAlign:'center'}}>
            <p style={{backgroundColor : 'white'}}>{this.state.num}</p>
            <button onClick={this.inc} style={{backgroundColor : 'green'}}>incrementation</button>
            <button onClick={this.dec} style={{backgroundColor : 'red'}}>decrementation</button>
          </div>
    )
  }
}
export default tp