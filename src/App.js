import React from 'react';
//import Logon from './pages/Logon';
import Routes from './routes';
import './global.css';
//<Header title="Semana OmniStack"/> 
function App() {

  return (
    <Routes />
  );
}
/*
function App() {
  //let counter = useState(0);
  let [counter, setCounter ] = useState(0);
  function increment() {
    setCounter(counter+1);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/
export default App;
