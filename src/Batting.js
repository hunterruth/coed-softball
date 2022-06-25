import React, { Component } from "react";

export class Batting extends React.Component {
	constructor(props) {
		super(props);
	}

    handleClick = (e, index) => {
        const { parent } = this.props;
        let lineup = parent.state.lineup;

        console.log('clicked');
        console.log(index);
        console.log(e);
        e.target.classList.toggle('complete');
        
        lineup[index].batted ? lineup[index].batted = false : lineup[index].batted = true; 

        parent.setState({ lineup: lineup });

    }

	render() {
		const { parent } = this.props;
		return (
			<div>
				<h2>Batting</h2>
				<ol>
					{parent.state.lineup.map((elem, index) => { 
                        let player = elem; 
						return (
							<li className={`${player.batted ? "complete" : ""}`} key={index} onClick={(e) => this.handleClick(e, index)}>{player.name}</li>
						);
					})}
				</ol>
			</div>
		);
	}
}
