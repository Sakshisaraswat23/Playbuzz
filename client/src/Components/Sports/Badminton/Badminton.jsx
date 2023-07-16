import React, { useState } from 'react';
import Timeline from '../../Card/Timeline';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { getUsername } from '../../../helper/helper';
import axios from "axios";
import '../../component.css';

export default function Badminton() {
	const [active, setActive] = useState('female');
	const navigate = useNavigate()
	const handleclick = async()=>{
		try{
			const {username} = await getUsername(); 
			const {data}= await axios.get(`/api/user/${username}`);
			if(data.admin==0)
			{
				toast.error("only Admin can add matches");
				navigate('/badminton');
			}
			else
			{
				navigate('/addmatch/badminton');
			}	

		}
		catch(e)
		{
			toast("Login needed");
			navigate('/userlogin');
		}
		
	}
	return (
		<div>
		<Toaster position='top-center' reverseOrder={false}></Toaster>
		     {/* <Link to="/addmatch/badminton" style={{ textDecoration: 'none' }}> */}
		        <Button onClick={handleclick} style={{ margin: '3px 3px' }}
					variant="contained">
					Add match
				</Button>
			{/* </Link> */}
			{active === 'male' && (
				<Button
					onClick={() => setActive('female')}
					style={{ margin: '3px 3px' }}
					variant="contained"
				>
					GIRLS
				</Button>
			)}
			{active === 'female' && (
				<Button
					onClick={() => setActive('male')}
					style={{ margin: '3px 3px' }}
					variant="contained"
				>
					BOYS
				</Button>
			)}
			<Timeline activeuser={active} sport="badminton" />
		</div>
	);
}
