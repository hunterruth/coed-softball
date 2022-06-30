import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Typography, Button, Container, FormGroup, TextField, Divider, ListItemIcon, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from '@mui/icons-material/Close';

export function Roster(props) {
	console.log("props: ", props);



	const parent = props;

	let lineup = [];

	useEffect(() => {
		console.log("lineup changed!");
		updateLineup();
	}, [parent.state.men, parent.state.women]);

	const handleReturnKey = (e) => {
		if (e.code === "Enter") {
			console.log(e);
			let input = e.target;
			addNewItem(e, input);
		}
	};

	const addNewItem = (e, input) => {
		// if button click - doesn't have input role passed through so must take previous

		const role = e.target.name;

		input = document.querySelector('input[name="' + role + '"]');
		// console.log(e.target.name);

		if (role == "Men") {
			let newMen = [...parent.state.men, input.value];

			parent.setState((state, props) => ({
				men: newMen,
				women: parent.state.women,
				lineup: parent.state.lineup,
			}));
		} else {
			let newWomen = [...parent.state.women, input.value];

			parent.setState((state, props) => ({
				women: newWomen,
				men: parent.state.men,
				lineup: parent.state.lineup,
			}));
		}
		input.value = "";
        
	};

    const removeItem = (e, index, role) => {


        if (role == "Men") {

            console.log('role = men');

            console.log(index);

			let newMen = parent.state.men;
                newMen.splice(index, 1);

			parent.setState((state, props) => ({
				men: newMen,
				women: parent.state.women,
				lineup: parent.state.lineup
			}));
            
		} else {
			let newWomen = parent.state.women;
                newWomen.splice(index, 1);

			parent.setState((state, props) => ({
				women: newWomen,
				men: parent.state.men,
				lineup: parent.state.lineup
			}));
            
		}

    
    }



	const updateLineup = (e) => {
		let index = 0,
			m = 0,
			w = 0,
			men = parent.state.men,
			women = parent.state.women;

		const addMan = (i) => {

			let man = { name: parent.state.men[m] };
			lineup.push(man);
			m++;
			if (m == men.length) {
				m = 0;
			}
		};

		const addWoman = (i) => {
			let woman = { name: parent.state.women[w] };

			lineup.push(woman);
			w++;
			if (w == women.length) {
				w = 0;
			}
		};

		for (var i = 0; i < 71; i++) {
			switch (index) {
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

		parent.setState((state, props) => ({
			women: parent.state.women,
			men: parent.state.men,
			lineup: lineup,
		}));

	};

	// render() {
	return (
		<Container>
			<Box sx={{ bgcolor: "background.paper", p: 0 }}>
				<Typography variant="overline" component="h2">
					Masc
				</Typography>
				<Box sx={{ display: "flex", borderRadius: 0 }}>
					<FormControl sx={{ flexGrow: 1 }}>
                        <TextField
							type="text"
							name="Men"
							onKeyUp={(e) => handleReturnKey(e)}
							label="Name"
                            id="filled-basic" 
                            variant="filled" />
					</FormControl>
					<Button
                        disableElevation
						sx={{ borderRadius: 0 }}
						name="Men"
						variant="contained"
						onClick={(e) => addNewItem(e)}
					>
						Add Player
					</Button>
				</Box>

				<List dense sx={{ textTransform: "capitalize" }}>
					{parent.state.men.map((subItems, sIndex) => {
						return (
                            <Box key={sIndex}> 
							<ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" name="Men" onClick={(e)=>removeItem(e, sIndex, 'Men')}>
                                      <CloseIcon
                                        edge="start"
                                        tabIndex={-1}
                                        />
                                    </IconButton>
                                  }
                                >
								<ListItemText primary={subItems} />
							</ListItem>
                            <Divider />
                            </Box>
						);
					})}
				</List>
			</Box>
			<Box sx={{ bgcolor: "background.paper", p: 0 }}>
                <Typography variant="overline" component="h2" mt={4}>
					Fem
				</Typography>
				<Box sx={{ display: "flex", borderRadius: 0 }}>
					<FormControl sx={{ flexGrow: 1 }}>
                        <TextField
							type="text"
							name="Women"
							onKeyUp={(e) => handleReturnKey(e)}
							label="Name"
                            id="filled-basic" 
                            variant="filled" />
					</FormControl>
					<Button
                        disableElevation
						sx={{ borderRadius: 0 }}
						name="Women"
						variant="contained"
						onClick={(e) => addNewItem(e)}
					>
						Add Player
					</Button>
				</Box>
				<List dense sx={{ textTransform: "capitalize" }}>
					{parent.state.women.map((subItems, sIndex) => {
						return (
                            <Box key={sIndex}>
							<ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" name="Women" onClick={(e)=>removeItem(e, sIndex, 'Women')}>
                                      <CloseIcon
                                        edge="start"
                                        tabIndex={-1}
                                        />
                                    </IconButton>
                                  }
                                >
								<ListItemText primary={subItems} />
							</ListItem>
                            <Divider />
                            </Box>
						);
					})}
				</List>
			</Box>
		</Container>
	);
	// }
}
