import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Todo } from "./components/Todo";
import Login from "./components/Login";
import Guard from "./components/Guard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Guard />}>
          <Route exact path="/Todo" element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
