import './App.css';
import SideNav from './components/SideNav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <SideNav name="Soumik Das"></SideNav>
    </div>
  );
}

export default App;
