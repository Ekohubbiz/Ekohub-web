import { BallGridPulse } from 'react-pure-loaders';
import './styles.scss';

function Loader({ loading }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-300 opacity-60  flex flex-col items-center justify-center">
      <div className="z-50">
        <BallGridPulse color="#000000" loading={loading} size={30} />
      </div>
    </div>
  );
}

export default Loader;
