import { Route, Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Badminton from './Components/Sports/Badminton/Badminton';
import BadmintonViewScore from './Components/Sports/Badminton/BadmintonViewScore';
import Editscore from './Components/Sports/Badminton/Editscore';
import TableTennis from './Components/Sports/TableTennis/TableTennis';
import AddMatch from './Components/Sports/Badminton/AddMatch';
import {UserContext} from './UserContext';


import Profile from './component_user/Profile';
import Username from './component_user/Username';
import Register from './component_user/Register';
import Password from './component_user/Password';
import Recovery from './component_user/Recovery';
import Reset from './component_user/Reset';
import PageNotFound from './component_user/PageNotFound';

import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import Webex from './Components/Webex';
import Tab from './Components/Tab';



function App() {	
	const [admin,setAdmin]=useState(false)
	return (
		<>
		<UserContext.Provider value={{admin,setAdmin}}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Tab />} />
				<Route exact path="/badminton" element={<Badminton />} />
				<Route exact path="/tabletennis" element={<TableTennis />} />
				<Route exact path="/addmatch" element={<AddMatch/>} />
				<Route exact path="/badmintonscore/:id"	element={<BadmintonViewScore />} />
				<Route exact path="/editscore/:id/:set" element={<Editscore />} />
				<Route exact path= "/profile" element= {<AuthorizeUser><Profile /></AuthorizeUser>} />
				<Route exact path= "/userlogin" element ={<Username></Username>}/>
				<Route exact  path ="/register" element ={<Register></Register>}/>
				<Route exact  path ="/password" element ={<ProtectRoute><Password /></ProtectRoute>}/>
				<Route exact  path ="/recovery" element ={<Recovery></Recovery>}/>
				<Route exact  path ="/reset" element ={<Reset></Reset>}/>
				<Route exact  path ="/*" element ={<PageNotFound></PageNotFound>}/>
			</Routes>
			</UserContext.Provider>
		</>

	);
}

export default App;
