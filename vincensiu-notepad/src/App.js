import './App.css';
import {Storage} from './services';
import {Header,Router} from './components';
import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';


function App() {

  let history = useNavigate();
  
    let storedArray2 = Storage.getItem('Note');     
          if(storedArray2 == null){
                storedArray2= [];                            
              }
    let abc = [...storedArray2];
    let [storedArray,setStoredArray] = useState(abc);
  
  
    function TotalDestruction(){
      Storage.removeItem('Note');
      setStoredArray([]);
      history.push('/')
    }         
   
    return (
      <div>
         <div className="App">
            <header className="App-header">       
              <Header destruction={TotalDestruction} value={storedArray}/>
            </header>
            <Router/>
         </div>
      </div>

    );
}

export default App;
