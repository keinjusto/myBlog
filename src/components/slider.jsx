

import React, { Component } from 'react';

class Panels extends Component {
  state = {
    openPanel: null
  };

  handlePanelClick = (panelIndex) => {
    this.setState(prevState => ({
      openPanel: prevState.openPanel === panelIndex ? null : panelIndex
    }));
  };

  render() {
    const { openPanel } = this.state;

    return (
      <div className="panels">
        {[1, 2, 3, 4].map(panelIndex => (
          <div
            key={panelIndex}
            className={`panel panel${panelIndex} ${openPanel === panelIndex ? 'open' : ''}`}
            onClick={() => this.handlePanelClick(panelIndex)}
          />
        ))}
      </div>
    );
  }
}

export default Panels;

