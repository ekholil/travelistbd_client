import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddSpot from './Components/AddSpot/AddSpot';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Mybooking from './Components/MyBooking/Mybooking';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Header />
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/home">
           <Home />
        </Route>
        <Route path="/addspot">
           <AddSpot />
        </Route>
        <Route path="/login">
           <Login />
        </Route>
        <PrivateRoute path="/placeorder/:id">
          <PlaceOrder />
        </PrivateRoute>
        <PrivateRoute path="/mybooking">
          <Mybooking />
        </PrivateRoute>
      </Switch>
      <Footer />
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
