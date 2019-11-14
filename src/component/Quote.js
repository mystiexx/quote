import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import data from './Text'

class Quote extends Component {
    constructor(){
        super()
        this.state = {
            quotes: null,
            randomQuote: null,
        }
    }

    componentDidMount(){
        this.setState({quotes: data.quotes})
    }

    randomQuoteHandler = () => {
        const randNumb = Math.floor(Math.random() * this.state.quotes.length);
        const randomQuote = this.state.quotes[randNumb];

        this.setState({
            randomQuote: randomQuote
        })
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Body>
                        <h2 className="text-center mt-3 mb-3">
                        {this.state.randomQuote !== null &&
                        this.state.randomQuote.quote} </h2>
                <button className="button btn-block p-2"
                onClick={this.randomQuoteHandler}
                ><h3>Aboi!!</h3></button>

                </Card.Body>

                </Card>
                
            </div>
        );
    }
}

export default Quote;
