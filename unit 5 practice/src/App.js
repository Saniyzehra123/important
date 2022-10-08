import logo from './logo.svg';
import './App.css';
// import {store} from './Redux/store';

import {useDispatch } from 'react-redux';
const dispatch = useDispatch();



function App() {

  const state =store.getState()
  return (
    <div className="App">
      <h3>counter:{store.getState()}</h3>
      <button
      onClick={()=> {
        store.dispatch({type:'addCount'})
      }}
      >add </button>
    </div>
  );
}

export default App;
