// import React, { useState, useReducer } from 'react';
import React, {useReducer} from 'react';

import './App.css';
import reducer, {initialState} from '../reducers';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {addOne, applyNumber, changeOperation, clearDisplay, memoryAdd, memoryApply, clearMemory  } from '../actions/';




// 
function App() {

  const onClick = (number) => {
    // console.log(number)
    // dispatch(addOne())
    dispatch(applyNumber(number))
  }

  const onClickOperator = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(memoryAdd())
  }

  const handleMemoryApply = () => {
    dispatch(memoryApply())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  const [state, dispatch] = useReducer(reducer, initialState )
  console.log('memory', state.memory)
 

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMemoryAdd} value={"M+"}/>
              <CalcButton onClick={handleMemoryApply} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>onClick(1)} value={1}/>
              <CalcButton onClick={()=>onClick(2)} value={2}/>
              <CalcButton onClick={()=>onClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>onClick(4)}value={4}/>
              <CalcButton onClick={()=>onClick(5)}value={5}/>
              <CalcButton onClick={()=>onClick(6)}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>onClick(7)} value={7}/>
              <CalcButton onClick={()=>onClick(8)} value={8}/>
              <CalcButton onClick={()=>onClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>onClickOperator('+')} value={"+"}/>
              <CalcButton onClick={()=>onClickOperator('*')}  value={"*"}/>
              <CalcButton onClick={()=>onClickOperator('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
