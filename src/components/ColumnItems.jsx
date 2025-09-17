import React from 'react'
import {Cart} from './Cart'

const ColumnItems = ({listTask, name, statusId}) => {
    const filterTasks = listTask.filter((task) => task.statusId === statusId)
  return (
    <div className="col">
              <div className="headerCol">
                <div className="leftContent">
                  <h3>{name}</h3>
                  <p>{filterTasks.length}</p>
                </div>
                <div className="rightContent">
                  <span>+</span>
                  <span>...</span>
                 
                </div>
                
              </div>
    
            <div className="listCart">
              {filterTasks.map(task => {
                return (
                  <Cart key={task.taskId} task={task}/>
                );
                
              })}
            </div>
            </div>
  )
}

export default ColumnItems