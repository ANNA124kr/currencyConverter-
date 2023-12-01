import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Update(props) {

    const[type,setType] =useState('')
    const[number,setNumber] =useState('')

    const[del , setDel] = useState('')

//====================================================================================

    const valid = () =>{
    
        if (type.match(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g) || type.match(/[0-9]/g)) {
            document.getElementById('type').innerHTML = 'Please, Enter only eng litters without numbers/symbols'
            return false
        }
        
        if (number < 0 ) {
            document.getElementById('newValue').innerHTML = 'Please, Enter number correctly'
            return false
        }else{
            
            document.getElementById('type').innerHTML = ''
            document.getElementById('newValue').innerHTML = ''
            props.changeValue(type ,number)
        }
    }

    

    return (
    <div className='container2'  >
            <div id='header_update' >
            {/* header & link to home page */}
            <h1 className='header'>Update <Link to={'/'} > <button className='back'style={{backgroundColor:'#ffff', border:'2px solid #007698', color:'#007698'}} >
            
            {/* icon "back" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"
                {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                strokeWidth="2" d="M10 6L2 16l8 10M2 16h28"></path></svg></button></Link> </h1>
            
                <div className='delDiv' >
                    {/* delete currency */}
                    <input className='input' id='delete-input' onChange={(e) => {setDel(e.target.value)}} type="text" placeholder='Type Currency' />
                    {/* button back */}
                    <button className='back' id='delete-btn' onClick={() =>{props.delCurrency(del)}} > <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"
                    {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"></path></svg> </button>
                </div>
    </div>

    
<div className='update-div' >
<div className='containUpdate'>

{/* currency table */}
    <div className='table' >
        <table >
    {/* <thead>
    <tr>
        <td> Type   </td>
        <td> Value  </td>
    </tr>
    </thead> */}

    <tbody>
    {props.curArr.map((val,index) =>{
        return<tr key={index} >
            <td  > {val.pennyType} </td>
            <td  > {val.value}     </td>
        </tr>
    })}
    </tbody>
</table>

    </div>
        <p id='type'style={{color:'#AE4E5A'}} ></p>
        {/* type cuurency */}
        <label htmlFor="type_text"> Type Currency (only 6 letters) </label><input id='type_text' className='input-in' onChange={(e) =>{setType(e.target.value)}} type="text" placeholder='Example, UHA ' maxLength={6} />
        <p id='newValue' style={{color:'#AE4E5A'}} ></p>
        {/* value currency */}
        <label htmlFor="newValue"> New Value (only numbers)</label> <input id='newValue' className='input-in' onChange={(e)=>{setNumber(e.target.value)}} type="number" placeholder= 'Example, 25' min={1} /> <br />

        {/* update btn */}
        <button className='button' id='update_btn' disabled ={!type || !number } onClick={valid} > Update </button> 
    </div>

        </div>
            </div>
)
}



// icon "arrow back"
export function BytesizeArrowLeft(props) {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L2 16l8 10M2 16h28"></path></svg>
    )
}

// icon "delete bag"
export function BytesizeTrash(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"></path></svg>
    )
}


