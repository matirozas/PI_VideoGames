import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage'
import Home from './Components/Home';
import GameDetail from './Components/GameDetail';
import CreateGame from './Components/CreateGame';


function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/gamedetail/:id' render={({ match }) => <GameDetail match={match} id={match.params.id} />}/>
        <Route path='/create' component={CreateGame}/>
        
        
        

      </Switch>
    </div>
   </BrowserRouter>
    
    
  );
}

export default App;
