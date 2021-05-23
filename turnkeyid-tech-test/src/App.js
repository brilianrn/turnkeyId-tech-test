import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Footer, Navbar } from './components/index';
import './App.css';
import { Home } from './pages';

function App() {
  return (
    <div className='bg-dark'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/person-detail/:id'>
            {/* <Detail /> */}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
