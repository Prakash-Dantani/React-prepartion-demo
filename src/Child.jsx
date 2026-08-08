import { memo, useContext } from 'react';
import { CounterContext } from './Context/contextProvider';

const Child = () => {
  const { increment, decrement, count } = useContext(CounterContext);
  console.log('Child Render');

  return (
    <>
      <h1>I am Child</h1>
      <button onClick={increment} className="btn btn-primary btn-sm col-md-3">
        Click{' '}
      </button>
    </>
  );
};

export default Child;
