import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Roster } from './Roster';
import { Batting } from './Batting';
import { Fielding } from './Fielding';

const App = () => {

  constructor = (props) => {
    super(props);
    this.state = {
      roster: []
    }; 
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    this.setState(prevState => {
      roster: [...prevState.roster, prevState.input]
    });
  };

  return (
    <div className="App"> 
      <Tabs>
        <TabPanel>
            <Roster parent={this} />
        </TabPanel>
        <TabPanel>
            <Batting />
        </TabPanel>
        <TabPanel>
            <Fielding />
        </TabPanel>
        <TabList>
        <Tab>Roster</Tab>
        <Tab>Batting</Tab>
        <Tab>Fielding</Tab>
        </TabList>
        </Tabs>
    </div>
  );
}

export default App;
