import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import DashboardApp from "./components/DashboardApp";
import AddBankAccount from "./components/AddBankAccount";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import PayBills from "./components/PayBills";
import Wallet from "./components/Wallet";
import NewHome from "./pages/NewHome";
import Stocks from "./components/Stocks";
import Rewards from "./components/Rewards";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NewHome/>
        </Route>
        <Route exact path="/stocks">
          <Stocks/>
        </Route>
        <Route exact path="/rewards">
          <Rewards/>
        </Route>
        <Route exact path="/shop">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/dashboard">
          <DashboardApp></DashboardApp>
        </Route>
        <Route path="/pay-bills">
          <PayBills></PayBills>
        </Route>
        <Route path="/wallet">
          <Wallet></Wallet>
        </Route>
        <Route path="/addbankaccount">
          <AddBankAccount/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
