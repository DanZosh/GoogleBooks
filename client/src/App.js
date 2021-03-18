import React from "react";

import "./_variables.sass"
import "bootstrap/scss/bootstrap.scss"
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import {Container} from "react-bootstrap";



function App()  {

    return (
      <div>
        <GlobalNavbar/>
        <Container className="py-5">
          <Header/>
        </Container>
      </div>
    );
  
}

export default App;
