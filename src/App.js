import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AppBar from './AppBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
<>
<Router>
  <div>
    <AppBar />
    <Switch>
      <Route exact path ='/'>
        <Home />
      </Route>
      <Route path = '/contact'>
        <Contact />
      </Route>
    </Switch>
  </div>
</Router>
</>
  );
}

export default App;
