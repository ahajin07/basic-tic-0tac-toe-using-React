import React ,{useState}from 'react';
import Square from './Square';

const Board = () =>{
  const[state,setState]=useState(Array(9).fill(null));
  const[isXTurn,setIsXTurn] = useState(true);
  const handelClick = (index) =>{
    const copyState=[...state];
    copyState[index] =isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
    return(
    <div className = 'board-container'>
    <div className="board-row">
    <Square onClick={()=> handelClick(0)} value={state[0]}/>
    <Square onClick={()=> handelClick(1)} value={state[1]}/>
    <Square onClick={()=> handelClick(2)} value={state[3]}/>
    </div>
    <div className="board-row">
    <Square onClick={()=> handelClick(3)} value={state[3]}/>
    <Square onClick={()=> handelClick(4)} value={state[4]}/>
    <Square onClick={()=> handelClick(5)} value={state[5]}/>
    </div>
    <div className="board-row">
    <Square onClick={()=> handelClick(6)} value={state[6]}/>
    <Square onClick={()=> handelClick(7)} value={state[7]}/>
    <Square onClick={()=> handelClick(8)} value={state[8]}/>
    </div>
    </div>
  );
};

export default Board;