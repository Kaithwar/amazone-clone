import React,{useEffect} from 'react'
import Header from "./components/Header";
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders'

const promise = loadStripe("pk_test_51NUTK8SBoTj8MkcT1mpEMPLt4VlHmIWli7VMFxpLWMmWLh4faYyiDk8Zg6oHKIwnmBTxzQgVGDRBjVpaXWxtUIFZ00cQNLG5Gj");

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        //the user is just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={
            <>
            <Header/>
            <Home/>
            </>
          }>
          </Route> 
          <Route exact path="/login" element={
            <><Login/></>
          }>
          </Route> 
          <Route exact path="/checkout" element={
            <>
            <Header/>
            <Checkout/>
            </>
            }>
          </Route> 
          <Route exact path="/orders" element={
            <>
            <Header/>
            <Orders/>
            </>
            }>
          </Route> 
          <Route exact path="/payment" element={
            <>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            </>
            }>
          </Route> 
         
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
