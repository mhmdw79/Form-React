import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import {Route,Switch,Redirect} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/SignUp" component={SignUp}/>
        <Redirect from="/" to="/SignUp"/>

      </Switch>


      <span style={{fontSize:"1rem",fontWeight:"400",color:"red"}}>Coded:Mohammad Dehghani</span>
      <br/>

      <span style={{fontSize:"1rem",fontWeight:"400",color:"red"}}>Front-End (Reactjs)</span>
    

      
       
    </div>
  );
}

export default App;
                              