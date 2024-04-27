import React, { useState, useEffect } from 'react';
import { TableCell, TableRow, makeStyles} from '@material-ui/core';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getUsername } from '../../../helper/helper';
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const useStyles = makeStyles({
	row: {
		'& > *': {
			fontSize: 18,
			color:"white",
			textAlign:"center"
		},
	},
});

function Readrow({ user }) {
	useEffect(() => {
		checkAdmin();
	}, []);
	const [show, setShow] = useState(false);
	const a = ['set1', 'set2', 'set3'];
    const checkAdmin = async () => {
		try{
			const {username} = await getUsername(); 
			const {data}= await axios.get(`/api/user/${username}`);
			// console.log(data)
			if(data.admin==1)
			{
				setShow(true);	
			}
		}
		catch(e)
		{
			setShow(false);
		}
	};
	const classes = useStyles();
	function showrow(val) {
		return (
			<>
				<TableRow key={val} className={classes.row}  >
					<TableCell>{val}</TableCell>
					<TableCell>{user[val][0]}</TableCell>
					<TableCell>{user[val][1]}</TableCell>
					{ show && (
						<TableCell>
						<Link to={`/editscore/${user._id}/${val}`} style={{ textDecoration: 'none' }}>
							<Button
								// color="white"
								// variant="contained"
								// style={{ marginRight: 10 }}
							>
								Edit
							</Button>
						 </Link>
						</TableCell>
					)}
				</TableRow>
			</>
		);
	}
	return (
		<>
			{a.map(i => showrow(i))}
		</>
	);
}

export default Readrow;
