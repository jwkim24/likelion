import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {plus,minus} from './slices/counterSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';

function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();

  const[flag, setflag] = useState(false)
  
  useEffect(()=>{
    setflag(!flag);
  },[counter])
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='App'>
      {counter}
      <div>
        <button onClick={()=>{dispatch(minus())}}>MINUS</button>
        <button onClick={()=>{dispatch(plus())}}>PLUS</button>
      </div>
      
    </div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
