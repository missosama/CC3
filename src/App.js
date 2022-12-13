import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/userSlice';
import { getPost } from './redux/postSlice';
import { BrowserRouter as Router} from 'react-router-dom';
import Accueil from './compenent/Accueil';
import '../src/compenent/compenent.css';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
    dispatch(getPost());
  },[dispatch])
  return (
    <div className="App">
      <Router>
        
        <Accueil/>
      </Router>
     
     
    </div>
  );
}
export default App;
