import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider } from "@mui/material/styles";
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { Roster } from "./Roster";
import { Batting } from "./Batting";
import { Fielding } from "./Fielding";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { green, yellow } from '@mui/material/colors';
import {ReactComponent as ReactLogo} from './unathletics.svg';


export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#fdd835',
    },
  },
};

const theme = createTheme({
    palette: {
        // type: 'light',
        primary: {
          main: '#1b5e20',
        },
        secondary: {
          main: '#fdd835',
        }
    }
});


interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function FullWidthTabs() {
	// const theme = useTheme();

	const [value, setValue] = React.useState(0);
	const [count, setCount] = React.useState(1);
    const [checked, setChecked] = React.useState([-1]);

	const [
		state = {
			lineup: [],
			men: [],
			women: [],
		},
		setState,
	] = React.useState();

	const handleClick = () => {
		setCount(count + 1);
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

	return (
        <ThemeProvider theme={theme}>
		<Box sx={{ bgcolor: "background.paper" }}>
            <AppBar position="sticky">
            <Box sx={{ padding: '10px' }} display="flex" justifyContent="center" alignItems="center" >
                <ReactLogo />
            </Box>
            <Tabs
                value={value}
                onChange={handleChange}
                color={green[700]}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Roster" {...a11yProps(0)} />
                <Tab label="Lineup" {...a11yProps(1)} />
                <Tab label="Fielding" {...a11yProps(2)} />
            </Tabs>
            </AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Roster
					state={state}
					setState={setState}
					count={count}
					handleClick={handleClick}
				/>
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				<Batting state={state} setState={setState} checked={checked} setChecked={setChecked} />
			</TabPanel>
			<TabPanel value={value} index={2} dir={theme.direction}>
				{/* <Fielding parent={state} /> */}
			</TabPanel>
		</Box>
        </ThemeProvider>
	);
}
