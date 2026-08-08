import { useContext } from 'react';
import { CounterContext } from './Context/contextProvider';

const DecrementButton = () => {
  const { decrement } = useContext(CounterContext);
  return (
    <>
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default DecrementButton;
