import React from 'react'
import Convert from './Convert'

export default function List(props) {
  return (
    <div>

{props.dataHistory.map((val , index) =>{
  return<Convert data = {val} index = {index + 1} indexDel = {index}  key={index} del ={props.del} />
})}

    </div>
  )
}
