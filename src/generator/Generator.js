import React, { Component } from 'react';
import './Generator.css';
import MarkovChain from 'markovchain';
import ciaSpeech from '../data/2017-01-21-cia';
import inaugSpeech from '../data/2017-01-21-cia';
import times from 'lodash.times';

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParagraphs: 10,
      text: []
    };

    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberInputChange(event) {
    this.setState({numberOfParagraphs: event.target.value});
  }

  handleSubmit(event) {
    const allSpeeches = inaugSpeech + ciaSpeech;
    const text = []
    times(this.state.numberOfParagraphs, () => {
      const speech =  new MarkovChain(allSpeeches).end(100).process()
      text.push(
        speech.charAt(0).toUpperCase()  + speech.slice(1) + '.'
      )
    })
    this.setState({text: text});
    event.preventDefault();
  }

  render() {
    const hasGenerated = this.state.text.length > 0;

    return (

        <form onSubmit={this.handleSubmit}  className="Generator">
          {this.state.text.map(function(text, i){
            return <p className="generatedText"  key={i}>{text}</p>
          })}
          <label className="generatedText__label">
            I want
              <input
                type="number"
                defaultValue={this.state.numberOfParagraphs}
                onChange={this.handleNumberInputChange}
                />
                sentances of Trump speech
          </label>
          <button>
            {hasGenerated ? "Go again" : "Generate"}
          </button>
        </form>

    );
  }
}

export default Generator;
