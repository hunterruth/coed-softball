import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

export function Lineup(props) {
    
    const parent = props;
	

	const handleToggle = (value: number) => () => {

        console.log(value); 

        const checked = parent.checked;

		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		parent.setChecked(newChecked);
	};

	

	console.log("batting props:", props);

	return (
		<Box sx={{ bgcolor: "background.paper" }}>

			<List sx={{ width: "100%", bgcolor: "background.paper", textTransform: "capitalize" }}>
				{parent.state.lineup.map((elem, value) => {
                    console.log(parent.checked.indexOf(value));

					const labelId = `checkbox-list-label-${value}`;
					const player = elem;
					return (
                        <Box key={value}>                            
						<ListItem disablePadding>
							<ListItemButton
								role={undefined}
								onClick={handleToggle(value)}
								dense
							>
								<ListItemText id={labelId} primary={player.name} />
								<ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
									<Checkbox
										edge="end"
										checked={parent.checked.indexOf(value) !== -1}
										tabIndex={-1}
										inputProps={{ "aria-labelledby": labelId }}
									/>
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
                        <Divider />
                        </Box>
					);
				})}
			</List>
		</Box>
	);
}
