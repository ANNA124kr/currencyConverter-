import React from 'react'
export default function Convert(props) {


  return (
    <div className='history' >
      {/* <p >#{props.index}</p> */}

{/* history */}
      <p> 
        {props.data.count} {props.data.from} = {props.data.result} {props.data.to}
      </p>

{/* delete btn */}
<button className='back'id='delete-btn' style={{backgroundColor:'#ffff', border:'1px solid #007698', color:'#007698' }} onClick={() => {props.del(props.indexDel)}}  > 
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"
{...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
strokeWidth="2" d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1
12m0-18l1-4h6l1 4"></path></svg> </button>

    </div>
  )
}


export function BytesizeTrash(props) {

  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"></path></svg>
  )
}