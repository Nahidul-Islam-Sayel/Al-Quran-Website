import logo from './logo.svg';
import './App.css';
import Nevbar from './Componant/Nevbar/Nevbar';
import Sura from './Componant/Sura/Sura';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ayat from './Componant/Ayat/Ayat';
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/Surah/:id">
      <Ayat/>
       </Route>
      <Route path="/">
        <Nevbar/>
        <Sura/>
        </Route>
    </Switch>
    

    </Router>
  );
}

export default App;
