import React, { Component } from "react";
import styled from "styled-components";
import "bulma/css/bulma.min.css";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})``;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 20 px;
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://cis188.org/">
              <div className="block">
                <Logo />
              </div>
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button is-primary">
                <strong>Add Movie</strong>
              </a>
            </div>
          </div>
        </nav>
      </Container>
    );
  }
}

export default NavBar;
