
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './Pages/About'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'
import Navbar from './Components/Navbar';

function App() {
  return (
  
    <>
    <Router>

    <Navbar />
    
      <Switch>
        <Route  path="/:name" exact component={Home}/>
        <Route  path="/about" exact component={About}/>
        <Route  path="/projects" exact component={Projects}/>
        <Route  path="*" exact component={PageNotFound}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
