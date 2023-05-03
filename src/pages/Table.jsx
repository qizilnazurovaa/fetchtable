import React from 'react'
import './table.css'

const Table = ({data}) => {
  return (
    data.map(item=>{
        return(
            <div><table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>unstock</th>
  </tr>
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.unitsInStock}</td>
  </tr>
  
</table></div>
      
        )
    })
  )
}

export default Table