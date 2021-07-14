import React, {useState} from 'react'
import FormInput from './FormInput'
import moment from 'moment'

function TodoList() {

      const [task, setTask] = useState();
      const [date2, setDate2] = useState();
      const [toDo, setToDo] = useState([]);
    
    
      function submitData() {
        setToDo([
          ...toDo,
          {
            task: task,
            eta: date2,
            completed: false,
          },
        ]);
      }
    
      return (
        <div>
          {console.log(date2)}
    
          <div>
            <input type="text" value={task} onChange={(e) => {setTask(e.target.value);}} />
            <input type="date" value={date2} onChange={(e) => {setDate2(e.target.value); }}/>
            <button onClick={submitData}>Submit</button>
          </div>
    
          {toDo.map((todo) => {
            return (
              <div>
                {todo.task}
                <br/>
                {moment(todo.eta).fromNow()}
                <br/>
                {todo.completed}
                <br/>
                {}
                <br/>
              </div>
            );
          })}
          
        </div>
      );
    }
    
    export default TodoList;