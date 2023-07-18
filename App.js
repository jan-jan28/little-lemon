import Nav from "./Nav.js"
import Home from "./Home.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Booking from "./Booking.js";
import Information from "./Information.js";
import { useReducer } from "react";

function App() {

  const initializeTimes = [19,20,21,22];
  let [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);

  function updateTimes(){
    return availableTimes
  }

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="booking" element={<Booking availableTimes={availableTimes}/>}/>
      </Routes>
      <Information/>
      </BrowserRouter>
    </>
  );
}

export default App;
