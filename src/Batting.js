import React, { Component } from "react";

export class Batting extends React.Component {
	constructor(props) {
		super(props);
	}

    handleClick = (e) => {
        console.log('clicked');
        e.target.classList.toggle('complete');
    }

	render() {
		const { parent } = this.props;

        

		return (
			<div>
				<h2>Batting</h2>
				<ol>
					{parent.state.lineup.map((subItems, sIndex) => {
                        console.log(subItems);
                        console.log(sIndex);
						return (
							<li onClick={(e) => this.handleClick(e)} key={sIndex}>
								{subItems}
							</li>
						);
					})}
				</ol>
			</div>
		);
	}
}
