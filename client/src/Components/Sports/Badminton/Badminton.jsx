import React, { useState } from 'react';
import Timeline from '../../Card/Timeline';
// import Button from '@mui/material/Button';
// import toast, { Toaster } from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import { getUsername } from '../../../helper/helper';
// import axios from "axios";
// import '../../component.css';
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
// export default function Badminton() {
// 	const [active, setActive] = useState('female');
// 	const navigate = useNavigate()
// 	const handleclick = async()=>{
// 		try{
// 			const {username} = await getUsername(); 
// 			const {data}= await axios.get(`/api/user/${username}`);
// 			if(data.admin==0)
// 			{
// 				toast.error("only Admin can add matches");
// 				navigate('/badminton');
// 			}
// 			else
// 			{
// 				navigate('/addmatch/badminton');
// 			}	

// 		}
// 		catch(e)
// 		{
// 			toast("Login needed");
// 			navigate('/userlogin');
// 		}
		
// 	}
// 	return (
// 		<div>
// 		<Toaster position='top-center' reverseOrder={false}></Toaster>
// 		     {/* <Link to="/addmatch/badminton" style={{ textDecoration: 'none' }}> */}
// 		        <Button onClick={handleclick} style={{ margin: '3px 3px' }}
// 					variant="contained">
// 					Add match
// 				</Button>
// 			{/* </Link> */}
// 			{active === 'male' && (
// 				<Button
// 					onClick={() => setActive('female')}
// 					style={{ margin: '3px 3px' }}
// 					variant="contained"
// 				>
// 					GIRLS
// 				</Button>
// 			)}
// 			{active === 'female' && (
// 				<Button
// 					onClick={() => setActive('male')}
// 					style={{ margin: '3px 3px' }}
// 					variant="contained"
// 				>
// 					BOYS
// 				</Button>
// 			)}
// 			<Timeline activeuser={active} sport="badminton" />
// 		</div>
// 	);
// }
// import React from 'react';
import Box from '@mui/material/Box';

const LeftComponent = () => (
  <div style={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
    {/* Left component content */}
    <h2>Left Component</h2>
  </div>
);


const PageLayout = () => (
  <Box
    sx={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ width: '20%', flexShrink: 0 }}>
      <LeftComponent />
    </Box>
    <Box sx={{ flexGrow: 1 }}>
	<Timeline  />
    </Box>
  </Box>
);

export default PageLayout;

