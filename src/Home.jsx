
import Child from './Child';
import { CounterContext } from './Context/contextProvider';
import { useContext } from 'react';
import DecrementButton from './decrementButton';
import DownloadInvoice from './components/DownloadInvoice';

const Home = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="container py-4">
      <div className="row pt-5">
        <div className="col-md-12">
          <h2>Parent Child Render</h2>
          <h3>Count is : {count}</h3>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-12 mb-3">
        </div>
        <Child />
        <DecrementButton />
        <DownloadInvoice />
      </div>
    </div>
  );
};
export default Home;
