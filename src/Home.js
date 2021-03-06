import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Map from "./components/Map";

require("dotenv").config();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationName: "TrafficMap",
    };
  }

  render() {
    return (
      <div>
        <Header appName={this.state.applicationName} />
        <Container>
          <Map />
        </Container>
      </div>
    );
  }
}

export default Home;
