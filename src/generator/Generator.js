import React, { Component } from 'react';
import './Generator.css';

class Generator extends Component {
  render() {
    return (
      <div className="Generator">
        <p>
          I want <input type="number" defaultValue="10" /> paragraphs of Trump speech
        </p>
        <button>
          Generate
        </button>
      </div>
    );
  }
}

export default Generator;
