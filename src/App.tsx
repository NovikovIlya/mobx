import './App.css';
import Wrapper from './components/wrapper';
import { RootStoreContext } from './root-store.context';
import RootStore from './store/root-store';

function App() {
  return (
    <>
      <RootStoreContext.Provider value={new RootStore()}>
        <Wrapper />
      </RootStoreContext.Provider>
    </>
  );
}

export default App;
