import { useState } from 'react'
import './App.css'
import {tasks} from './constant'
import {Cart} from './components/Cart'
import ColumnItems from './components/ColumnItems'
function App() {
  

  return (
    <div className="container" style={{padding: '8px'}}>
      <div className="header">
        <input type="text" placeholder="Search" />
        <button>New Item</button>
      </div>
      <div className="mainContent">
        <ColumnItems listTask={tasks} name="TO DO" statusId={1}/>
        <ColumnItems listTask={tasks} name="IN PROGRESS" statusId={2}/>
        <ColumnItems listTask={tasks} name="IN REVIEW" statusId={3}/>
        <ColumnItems listTask={tasks} name="DONE" statusId={4}/>
      </div>
      
      </div>
    
    
   
    
  )
}

export default App
