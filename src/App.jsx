import { useContext, useState } from 'react';
import './App.css';
import Child from './Child';
import { CounterContext } from './Context/contextProvider';
import DecrementButton from './decrementButton';
import exportPdf from './exportPdf';
import { Link } from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0);
  const { count } = useContext(CounterContext);

  return (
    <>
      
      <div className="row pt-5">
        <div className="com-md-12">
          <h2>Parent Child Render</h2>
          <h3>Count is : {count}</h3>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row pt-5">
        <Child />
        <DecrementButton />
        <Link to = {<exportPdf />}>Print PDF</Link>
      </div>
    </>
  );
}

export default App;
