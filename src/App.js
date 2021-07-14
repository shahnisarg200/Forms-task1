import React, {Component} from 'react'

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      userInput : "",
      list:[],
      eta:''
    }
  }
  updateInput(value){
    this.setState({
      userInput: value,
    });
  }
  updateDate(date2){
    this.setState({
      eta: date2,
    });
  }
  

  addItem(){
    if(this.state.userInput !== '' ){
      const userInput = {
  
        id :  Math.random(),
        value : this.state.userInput
      };
  
    
      const list = [...this.state.list];
      list.push(userInput);
  
      this.setState({
        list,
        userInput:""
      });
    }
  }
  

  deleteItem(key){
    const list = [...this.state.list];
  
  
    const updateList = list.filter(item => item.id !== key);
  
    
    this.setState({
      list:updateList,
    });
  
  }
  
  render(){
    return(
     <div>
        <div>               
          <h1>TODO LIST</h1>
            <input
               placeholder="add item . . . "
               value = {this.state.userInput}
              onChange = {item => this.updateInput(item.target.value)}
            />
          <button
              onClick = {()=>this.addItem()}
              >
              ADD
          </button>
        </div>
        <div>
         {this.state.list.map(item => {return(
  
            <ul onClick = { () => this.deleteItem(item.id) }>
                {item.value}
            </ul>
         )})}
        </div>
      </div>
      
    );
  }
}
  
export default App;
