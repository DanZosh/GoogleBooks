import React from "react";

import "./_variables.sass"
import "bootstrap/scss/bootstrap.scss"
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import SearchForm from "./components/SearchForm";


function App()  {

    return (
      <div>
        <GlobalNavbar/>
        <Container className="py-5">
          <Header/>
        </Container>
        <SearchForm/>
      </div>
    );
  
}

export default App;
