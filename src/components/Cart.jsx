import {React} from 'react'
import {users} from '../constant'
import {flags} from '../constant'

export const Cart = ({task}) => {
    const userFilter = users.find((user) => user.userId === task.assignedTo)
    const flagFilter = flags.find((flag) => flag.flagId === task.flagId)
  return (
    <div className="CartItem" key={task.taskId}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div>
        <button>{userFilter ? userFilter.name : "Unassigned"}</button>
        <button style={
            {backgroundColor: flagFilter ? flagFilter.color : "#FFFFFF",
        }}>{flagFilter.name}</button>

      </div>
    </div>
  )
}



