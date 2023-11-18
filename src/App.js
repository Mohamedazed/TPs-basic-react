import React from 'react';
import HandlValInp from './components/NomInp';
import TodoApp from './components/listing';
import App1 from './components/tpapi'
import Formulaire from './components/form'
import Calculator from './components/Calculator'
function App(){
  return(
    <div style={{textAlign:'center'}}>
      <HandlValInp/><hr/><TodoApp/><hr/><App1/><hr/><Formulaire/><hr/><Calculator/>
    </div>
  );
}
export default App;