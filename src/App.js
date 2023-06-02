
import React from "react";
import NavBar from "./Components/NaveBar/NavBar";
import {action,orginals} from "./urls"
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Rowpost/RowPost";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Lectures for you' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
