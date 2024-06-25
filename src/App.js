import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);


  const handleAdd = () => {
    if(num >= 0 && num <= 100){
      setNum(num + 2); 
    }
  }

  const handleDivide = () => {
    if (num <= 0) return;
    else if (num > 100) return;
    const newNum = num / 2;
    setNum(newNum);
  };


  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button onClick={handleAdd}>+</button>
        <button>-</button>
        <button>x</button>
        <button onClick={handleDivide}>/</button>
      </div>
    </div>
  );
}
export default App;
