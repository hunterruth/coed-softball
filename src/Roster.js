import React, { useState, useEffect, Component } from "react";

export class Roster extends React.Component {
    
  render() {
    const { parent } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={parent.saveInput}
        />
        <button onClick={parent.addNewItem}> Add Item </button>
        <ol>
          {parent.state.roster.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
  
}