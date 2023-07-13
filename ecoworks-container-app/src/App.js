import React from 'react';

import NavBar1 from "./components/NavBar/NavBar1";
import NavBar2 from "./components/NavBar/NavBar2";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="container">
      <NavBar1 />
      <NavBar2 />
      {/* {props.children} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
