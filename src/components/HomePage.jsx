import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moneyImg from './icons/Coins-pana.svg'
import linkdinIcon from './icons/linkdin.svg'
import instagramIcon from './icons/instagran.svg'
import gitIcon from './icons/gitHub.svg'

export default function HomePage(props) {

  const[from ,setFrom] = useState('Dollar')
  const[to ,setTo] = useState('Dollar')
  const[number ,setNumber] =useState('')

//================================================================================
/** Formula
 * a - exchange rate of currency into you want to rate
 * b - exchange rate of currency from you rate
 * x - count of money
 * c - result
 * 
 *                      c = ( a / b )*x
*/
//================================================================================

//calculate func
const calculate = () =>{
  let valFrom = 0; let valTo = 0
  
  props.curArr.find((val) => {

    if (from == val.pennyType ) {
      valFrom = val.value
      console.log(valFrom);
    }
  })
  
  props.curArr.find((val) => {
    if ( to == val.pennyType) {
      valTo = val.value
      console.log(valTo);
    }
  })
  
  let result = (valTo / valFrom)*number
  document.getElementById('result').innerHTML = result.toFixed(2);
  props.addHistory(from ,to ,number , result.toFixed(2))
  
} 


//================================================================================
return (
  <div className='container' >

      {/* money illustration */}
      <img id='moneyIllustration' src= {moneyImg } alt="money illustration" />

      <div className='converter'>
        
    {/* !messege */}
    <p style={{fontSize:'14px', color:'#AE4E5A'}}> 
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" 
    {...props}><g fill="currentColor"><path fillRule="evenodd" d="M13 10a2 2 0 0 1 2 2v7a2 
    2 0 1 1-4 0v-7a2 2 0 0 1 2-2Z" clipRule="evenodd"></path><path d="M15 7a2 2 0 1 1-4 0a2 
    2 0 0 1 4 0Z"></path><path fillRule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 
    2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0
    13s5.82 13 13 13Z" clipRule="evenodd"></path></g></svg> The project is created for study only.
      Its doesn't save data/information

    </p>
        {/* header */}
        <h1 className='header' >Currency converter</h1>
        {/* from */}
        <label htmlFor="numb">
        From
        </label>

        <br />
        {/* icon from */}
        <svg style={{color:'#A2685D'}}  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" 
        viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" 
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1
        1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2">
        </path><rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"></rect></g></svg> 
        
        {/* input numb & select */}
        <input className='input' id='numb' onChange={(e) =>{setNumber(e.target.value)}} 
          type="number" placeholder='0' min={1} /> 

          {/* select from */}
          <select className='select' onChange={(e) =>{setFrom(e.target.value)}} >
            <option value="0" disabled selected >What Today?</option>
            {props.curArr.map((val , index) =>{
            return<option className='select-content' value= {val.pennyType} key={index} > {val.pennyType} </option>})}
          </select> 

      <br />
      {/* to */}
      <label htmlFor="result">
        To
      </label>

      <br />

      {/* icon to */}
      <svg style={{color:'#A2685D'}}  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
      viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" 
      strokeLinecap="round" strokeLinejoin="round"><path d="M7 10.02v1.01m0-6.02v.94m0 7.54c3.5
      0 6-1.24 6-4c0-3-1.5-5-4.5-6.5l1.18-1.52a.66.66 0 0 0-.56-1H4.88a.66.66 0 0 0-.56 1L5.5 3C2.5 
      4.51 1 6.51 1 9.51c0 2.74 2.5 3.98 6 3.98Z"></path>
      <path d="M6 9.56A1.24 1.24 0 0 0 7 10a1.12 1.12 0 0 0 1.19-1A1.12 1.12 0 0 0 7 8a1.12 1.12
      0 0 1-1.19-1A1.11 1.11 0 0 1 7 6a1.26 1.26 0 0 1 1 .4"></path></g></svg>

      {/* result */}
      <output className='input' id='result' > 0 </output>
      
      {/* select to */}
      <select className='select' onChange={(e) => {setTo(e.target.value)}} >
        <option value="0" disabled selected >Favorite?</option>
      {props.curArr.map((val , index) =>{
        return<option className='select-content' value= {val.pennyType} key={index} > {val.pennyType} </option>})}
      </select> 
      
      


  </div>

    <div className='container-btn' >

  <hr />
  {/* link to update page */}
      <Link className='link' to={'/update'} > <button className='button' onClick={() =>{props.setFlag(false)}} > Update </button> </Link>
      <button className='button' onClick={() =>{props.condition()}} > History </button> 

      {/* buton convert */}
      <button className='button' style={{width:'40px' , borderRadius:'9000px' , padding:'8px', marginLeft:'10px' }} disabled = {!number} onClick={calculate} > 
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.15 16.15q.825 0 1.413-.387t.587-1.213q0-.725-.613-1.175T11.35 12.35q-1.475-.525-2.162-1.25T8.5 9.2q0-1.025.713-1.862T11.15 6.25v-.375q0-.35.263-.613T12.024 5q.35 0 .613.263t.262.612v.375q.725.05 1.338.488t.987 1.062q.175.275.025.588t-.5.437q-.325.125-.65.025t-.525-.375q-.25-.3-.625-.487t-.9-.188q-.875 0-1.338.375T10.25 9.2q0 .65.575 1.025t2.075.875q1.8.65 2.4 1.525t.6 1.925q0 .725-.25 1.275t-.663.938q-.412.387-.962.624t-1.175.363v.375q0 .35-.262.613t-.613.262q-.35 0-.612-.263t-.263-.612V17.7q-.95-.2-1.625-.75T8.4 15.55q-.15-.35.013-.675t.512-.45q.325-.125.65.012t.5.438q.35.65.888.962t1.187.313ZM12 23q-2.8 0-5.15-1.275T3 18.325V20q0 .425-.288.713T2 21q-.425 0-.713-.288T1 20v-4q0-.425.288-.713T2 15h4q.425 0 .713.288T7 16q0 .425-.288.713T6 17H4.525q1.2 1.8 3.163 2.9T12 21q3.525 0 6.063-2.35t2.887-5.775q.05-.4.35-.638T22 12q.425 0 .725.263t.25.637q-.175 2.125-1.1 3.962t-2.4 3.2q-1.475 1.363-3.388 2.15T12 23Zm0-20Q8.475 3 5.937 5.35T3.05 11.125q-.05.4-.35.638T2 12q-.425 0-.725-.263t-.25-.637q.175-2.125 1.1-3.962t2.4-3.2Q6 2.575 7.913 1.788T12 1q2.8 0 5.15 1.275t3.85 3.4V4q0-.425.288-.712T22 3q.425 0 .713.288T23 4v4q0 .425-.288.713T22 9h-4q-.425 0-.713-.288T17 8q0-.425.288-.713T18 7h1.475q-1.2-1.8-3.163-2.9T12 3Z"></path></svg>
      </button>
        
    </div>

        <div className="footer">
        Follow me 
      
      {/* Linkdin */}
      <Link className='link' to={'https://www.linkedin.com/in/anna-kravchuk-467716276/'} >  <img className='smm-icon' src={linkdinIcon} alt="linkdin icon" /> </Link>

      {/* instagram */}
      <Link className='link' to={'https://www.instagram.com/anna_mei5/'} >  <img className='smm-icon' src={instagramIcon} alt="instagram icon" /> </Link>

      {/* github */}
      <Link className='link' to={'https://github.com/ANNA124kr'} >  <img className='smm-icon' src={gitIcon} alt="github icon" /> </Link>

        </div>

      </div>  
      
  )
}

// icon pocketbook
export function StreamlineMoneyCashBagDollarBagPaymentCashMoneyFinance(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10.02v1.01m0-6.02v.94m0 7.54c3.5 0 6-1.24 6-4c0-3-1.5-5-4.5-6.5l1.18-1.52a.66.66 0 0 0-.56-1H4.88a.66.66 0 0 0-.56 1L5.5 3C2.5 4.51 1 6.51 1 9.51c0 2.74 2.5 3.98 6 3.98Z"></path><path d="M6 9.56A1.24 1.24 0 0 0 7 10a1.12 1.12 0 0 0 1.19-1A1.12 1.12 0 0 0 7 8a1.12 1.12 0 0 1-1.19-1A1.11 1.11 0 0 1 7 6a1.26 1.26 0 0 1 1 .4"></path></g></svg>
    )
  }
  
  
// icon pocketbook
export function MaterialSymbolsCurrencyExchange(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 23q-2.8 0-5.15-1.275T3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9T12 21q1.875 0 3.513-.713t2.85-1.924q1.212-1.213 1.925-2.85T21 12h2q0 2.275-.863 4.275t-2.362 3.5q-1.5 1.5-3.5 2.363T12 23Zm-.9-4v-1.3q-1.175-.275-1.913-1.012T8.1 14.75l1.65-.65q.3 1.025.938 1.538t1.462.512q.825 0 1.413-.387t.587-1.213q0-.725-.613-1.175T11.35 12.35q-1.475-.525-2.162-1.25T8.5 9.2q0-1.025.713-1.862T11.15 6.25V5h1.75v1.25q.9.075 1.638.725T15.55 8.5l-1.6.65q-.2-.575-.65-.963T12.05 7.8q-.875 0-1.338.375T10.25 9.2q0 .65.575 1.025t2.075.875q1.8.65 2.4 1.525t.6 1.925q0 .725-.25 1.275t-.663.938q-.412.387-.962.624t-1.175.363V19H11.1ZM1 12q0-2.275.863-4.275t2.362-3.5q1.5-1.5 3.5-2.362T12 1q2.8 0 5.15 1.275t3.85 3.4V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9T12 3q-1.875 0-3.513.713t-2.85 1.924Q4.426 6.85 3.714 8.488T3 12H1Z"></path></svg>
  )
}


// icon dollar
export function MaterialSymbolsCurrencyExchangeRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.15 16.15q.825 0 1.413-.387t.587-1.213q0-.725-.613-1.175T11.35 12.35q-1.475-.525-2.162-1.25T8.5 9.2q0-1.025.713-1.862T11.15 6.25v-.375q0-.35.263-.613T12.024 5q.35 0 .613.263t.262.612v.375q.725.05 1.338.488t.987 1.062q.175.275.025.588t-.5.437q-.325.125-.65.025t-.525-.375q-.25-.3-.625-.487t-.9-.188q-.875 0-1.338.375T10.25 9.2q0 .65.575 1.025t2.075.875q1.8.65 2.4 1.525t.6 1.925q0 .725-.25 1.275t-.663.938q-.412.387-.962.624t-1.175.363v.375q0 .35-.262.613t-.613.262q-.35 0-.612-.263t-.263-.612V17.7q-.95-.2-1.625-.75T8.4 15.55q-.15-.35.013-.675t.512-.45q.325-.125.65.012t.5.438q.35.65.888.962t1.187.313ZM12 23q-2.8 0-5.15-1.275T3 18.325V20q0 .425-.288.713T2 21q-.425 0-.713-.288T1 20v-4q0-.425.288-.713T2 15h4q.425 0 .713.288T7 16q0 .425-.288.713T6 17H4.525q1.2 1.8 3.163 2.9T12 21q3.525 0 6.063-2.35t2.887-5.775q.05-.4.35-.638T22 12q.425 0 .725.263t.25.637q-.175 2.125-1.1 3.962t-2.4 3.2q-1.475 1.363-3.388 2.15T12 23Zm0-20Q8.475 3 5.937 5.35T3.05 11.125q-.05.4-.35.638T2 12q-.425 0-.725-.263t-.25-.637q.175-2.125 1.1-3.962t2.4-3.2Q6 2.575 7.913 1.788T12 1q2.8 0 5.15 1.275t3.85 3.4V4q0-.425.288-.712T22 3q.425 0 .713.288T23 4v4q0 .425-.288.713T22 9h-4q-.425 0-.713-.288T17 8q0-.425.288-.713T18 7h1.475q-1.2-1.8-3.163-2.9T12 3Z"></path></svg>
  )
}


// icon "!"
export function PepiconsPopInfoCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}><g fill="currentColor"><path fillRule="evenodd" d="M13 10a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2Z" clipRule="evenodd"></path><path d="M15 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path><path fillRule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13Z" clipRule="evenodd"></path></g></svg>
  )
}


