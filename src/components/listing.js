import React,{Component} from 'react'

export default class TodoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      Tasks : [],
      newTask : ''
    }
  // this.onChange=(e)=>{
  //   this.setState({newTask : e.target.value})
  // }
  this.onClick=()=>{
    const {newTask,Tasks} = this.state
    if(newTask.trim() !== ''){
      this.setState({Tasks : [...Tasks,newTask],newTask : ''})
    }
    
  }
  this.supp=(index)=>{
    const {Tasks} = this.state
    const newtasks = [...Tasks]
    newtasks.splice(index,1)
    this.setState({Tasks : newtasks})
  }  
  }
  render(){
    const {newTask,Tasks} = this.state
    return(
      <div style={{backgroundColor:'grey'}}>
        <h1>Tasks add</h1>
        <div>
        <input
          type='text'
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          placeholder='add a task'
        />
        <button onClick={this.onClick}>add task</button>
        </div>        
            <ul>
              {
              Tasks.map((task,index)=>(
                <il key={index} >
                  {task}
                  <button onClick={()=>this.supp(index)}>supprimer</button>
                </il>)
              )}
            </ul>       
      </div>
    )
  }
}
