/**
Game 
   -> Board 
      -> 
   -> history 

 */

   import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  
  function handleClick(){
    setValue("X")
  }
  return (
    <button 
    onClick={handleClick}
    className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
}


function Board() {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>

      <div className='flex'>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div className='flex'>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div className='flex'>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
    </>
  );
}

export default Board;
