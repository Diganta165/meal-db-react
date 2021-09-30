
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NavigationBar from './NavigationBar/NavigationBar';

function App() {
  return (
    <div className="">
      

      {/* React Router  */}

      <Router>

        {/* Navigation Bar  */}
        <NavigationBar></NavigationBar>

        <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>

        </Switch>

      </Router>

      
    </div>
  );
}

export default App;
