import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Dashboard from "./pages/dashboard/dashboard";
import MyCart from "./pages/mycart/mycart";
import Orders from "./pages/orders/orders";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/mycart" component={MyCart} />
          <Route path="/orders" component={Orders} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
