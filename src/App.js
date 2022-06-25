import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Roster } from './Roster';
import { Batting } from './Batting';
import { Fielding } from './Fielding';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roster: []
    }
  }

  render() {
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

}
