import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Roster } from "./Roster";
import { Batting } from "./Batting";
import { Fielding } from "./Fielding";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lineup: [],
			men: [],
			women: [],
		};
	}

	render() {
		return (
			<div className="App">
				<Tabs>
					<TabPanel>
						<Roster parent={this} />
					</TabPanel>
					<TabPanel>
						<Batting parent={this} />
					</TabPanel>
					<TabPanel>
						<Fielding parent={this} />
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
