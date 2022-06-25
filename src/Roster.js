import React, { useState, useEffect, Component } from "react";

export class Roster extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roster: [],
        }; 
    };

    saveInput = (e) => {
      this.setState({ input: e.target.value });
    };
  
    addNewItem = () => {
    this.setState(prevState => ({
        roster: [...prevState.roster, prevState.input],
    })); 
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            onChange={this.saveInput}
          />
          <button onClick={this.addNewItem}> Add Item </button>
          <ol>
            {this.state.roster.map((subItems, sIndex) => {
              return <li key={sIndex}> {subItems}</li>
            })}
          </ol>
        </div>
      );
    }
  }