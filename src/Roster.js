import React, { Component } from "react";

export class Roster extends React.Component {
	constructor(props) {
		super(props);
	}

	handleReturnKey = (e) => {
		if (e.code === "Enter") {
			console.log(e);
			let input = e.target;
			this.addNewItem(e, input);
		}
	};

	addNewItem = (e, input) => {
		// if button click - doesn't have input role passed through so must take previous
		if (!input) {
			input = e.target.previousSibling;
		}
		const { parent } = this.props;
		let role = input.dataset.role;

		if (role == "men") {
			parent.setState({ men: [...parent.state.men, input.value] });
		} else {
			parent.setState({ women: [...parent.state.women, input.value] });
		}
		input.value = "";

        this.updateRoster();
	};

    updateRoster = (e) => {

        const { parent } = this.props;

        setTimeout(function(){

            console.log(parent);

            let index = 0,
                m = 0,
                w = 0,
                men = parent.state.men,
                women = parent.state.women;
            
            let lineup = [];

            const addMan = (i) => {
                // console.log('add man: ' + m);
                // console.log('men count:' + men.length);
                let man = { name: men[m], batted: false }
                
                lineup.push(man);
                m++;
                if (m == men.length) {
                    m = 0;
                }
            }

            const addWoman = (i) => {
                // console.log('add woman: ' + w);
                // console.log('women count:' + women.length);
                let woman = { name: women[w], batted: false }

                lineup.push(woman);
                w++;
                if (w == women.length) {
                    w = 0;
                }
                
            }

            for (var i=0; i < 100; i++){

                switch(index) {
                    case 0:
                    addMan(m); 
                    break;

                    case 1:
                    addWoman(w); 
                    break;

                    case 2:
                    addMan(m); 
                    break;

                    case 3:
                    addWoman(w); 
                    break;

                    case 4:
                    addMan(m); 
                    break;

                    case 5:
                    addMan(m); 
                    break;

                    case 6:
                    addWoman(w); 
                    break;

                    case 7:
                    addMan(m); 
                    break;

                    case 8:
                    addWoman(w); 
                    break;

                    case 9:
                    addMan(m); 
                }
                index++; 
                if (index > 9) {
                    index = 0;
                }

            }
            // M F M F M M F M F M
            parent.setState({ lineup: lineup });

        }, 100);
    }


	render() {
		const { parent } = this.props;

		return (
			<div>
				<h2>Roster</h2>
				<div>
					<h3>Men</h3>
					<input
						data-role="men"
						type="text"
						onKeyUp={(e) => this.handleReturnKey(e)}
					/>
					<button onClick={(e) => this.addNewItem(e)}>Add Player</button>
					<ol>
						{parent.state.men.map((subItems, sIndex) => {
							return <li key={sIndex}> {subItems}</li>;
						})}
					</ol>
				</div>
				<div>
					<h3>Women</h3>
					<input
						data-role="women"
						type="text"
						onKeyUp={(e) => this.handleReturnKey(e)}
					/>
					<button onClick={(e) => this.addNewItem(e)}>Add Player</button>
					<ol>
						{parent.state.women.map((subItems, sIndex) => {
							return <li key={sIndex}> {subItems}</li>;
						})}
					</ol>
				</div>
			</div>
		);
	}
}
