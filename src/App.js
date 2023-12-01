import './App.css';
import { HashRouter as BrowserRouter , Routes ,Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import Update from './components/Update';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';


//================================================================

//History
let history;
class History{
  constructor(from , to , count , result){
    this.from = from;
    this.to = to;
    this.count = count;
    this.result = result;
  }
}

//================================================================

//Currency class
let currency;
class Currency{
  constructor(pennyType,value){
    this.pennyType = pennyType;
    this.value = value;
  }

  changeVal = (numb) =>{
    this.value = numb
  }

}

let dollar = new Currency('USD' , 1)
let euro = new Currency('EUR' , 1.10)
let shekel = new Currency('ILS' , 3.71)
let hryvnia = new Currency('UAH' , 36.93 )

//================================================================

function App() {

  //Currency Array // add and change money value func
  const [curArr , setCurArr] = useState([dollar, euro , shekel , hryvnia])

  const changeValue = ( type , numb) =>{

    let resullt = curArr.find((val) =>(val.pennyType == type))
    console.log(resullt);

    if (resullt == undefined) {
      currency = new Currency(type , numb)
      setCurArr([...curArr , currency])
    }else{
      resullt.changeVal(numb)
    }

  }

//================================================================
// user currency array // add

const[userHistory, setUserHistory] =useState([])

const addHistory = (from, to ,numb , resl) =>{
  history = new History(from ,to , numb , resl)
  setUserHistory([...userHistory , history ])
  
}

//================================================================
// user currency array // delete

const del  = (i) =>{
  
  let newArr = userHistory.filter((val,index) => (index !== i))
  
  setUserHistory([...newArr])
  
}

//================================================================

// delete currency

const delCurrency = (penny) =>{

let newArr = curArr.filter((val ,index) => (val.pennyType != penny))
setCurArr([...newArr])

}

//================================================================

// flag

const[flag , setFlag] = useState(false)

const showHistory = () =>{
  if (flag) {
    return<List dataHistory = {userHistory} del ={del} />
  }
}

const condition = () =>{
  setFlag(!flag)
}


//================================================================
return (
    <div className="App">

      <BrowserRouter>
      <Routes>

      <Route path='/' element ={<HomePage curArr ={curArr}  addHistory = {addHistory} condition = {condition} setFlag ={setFlag} />} />
      <Route path='/update' element ={<Update curArr ={curArr} changeValue ={changeValue} delCurrency ={delCurrency}  />} />



      </Routes>
      
      {showHistory()}
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
