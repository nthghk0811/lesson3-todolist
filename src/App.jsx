import { useState } from 'react'
import './App.css'
import {tasks} from './constant'
import {Cart} from './components/Cart'
import ColumnItems from './components/ColumnItems'


function App() {
  const [listTask, setListTask] = useState(tasks)
  const onChange = (e) => {
    //search
    const findItem = tasks.filter((task) => {
    const findTitle = task.title.toLowerCase().includes(e.target.value.toLowerCase())
    
    const findDes = task.description.toLowerCase().includes(e.target.value.toLowerCase())
    return findTitle || findDes
  })
  setListTask(findItem)
  }

  
  return (
    <div className="container" style={{padding: '8px'}}>
      <div className="header">
        <input type="text" onChange={onChange} placeholder="Search" />
        <button>New Item</button>
      </div>
      <div className="mainContent">
        <ColumnItems listTask={listTask} name="TO DO" statusId={1}/>
        <ColumnItems listTask={listTask} name="IN PROGRESS" statusId={2}/>
        <ColumnItems listTask={listTask} name="IN REVIEW" statusId={3}/>
        <ColumnItems listTask={listTask} name="DONE" statusId={4}/>
      </div>
      
      </div>
    
    
   
    
  )
}

export default App
