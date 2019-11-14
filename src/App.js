import React, { Component } from "react";
import Quote from "./component/Quote";
import Container from "react-bootstrap/Container";
import "./App.css";
import { FaBroadcastTower } from "react-icons/fa";

class App extends Component {
    render() {
        return (
            <div class="body">
                <Container fluid>
                    <section>
                        <h4 className="text-center">
                            Generate random quotes
                            <br /> from cultist
                        </h4>
                        <div className="d-flex justify-content-center mb-3">
                            <FaBroadcastTower className="icon" />
                        </div>
                        <Quote />
                    </section>
                </Container>
            </div>
        );
    }
}

export default App;
