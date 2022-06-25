import React, { Component, createRef } from "react";

export class Roster extends React.Component {

  constructor(props) {
    super(props);
    this.input = createRef();
  }

  handleReturnKey = (e) => {
    if (e.keyCode === 13) {
      this.addNewItem()
    }
  }

  addNewItem = () => {
    const { parent } = this.props;
    parent.setState({ roster: [ ...parent.state.roster, this.input.current.value ]});
    this.input.current.value = "";
  }
    
  render() {
    const { parent } = this.props;

    return (
      <div>
        <input
          type="text"
          ref={ this.input }
          onKeyUp={ this.handleReturnKey }
        />
        <button onClick={ this.addNewItem }> Add Item </button>
        <ol>
          { parent.state.roster.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          }) }
        </ol>
      </div>
    );
  }

}