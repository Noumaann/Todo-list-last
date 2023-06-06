

import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Todo } from "./components/Todo";
import Login from './components/Login';



function App() {

  return (
    <Router>
      <Routes>
      
      <Route  path ="/" element={<Login/>} />
  
    
         <Route exact path ="/Todo" element={<Todo/>} />
         </Routes>
    </Router>
  );
}

export default App;
