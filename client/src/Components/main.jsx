import { Route, Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Badminton from './Sports/Badminton/Badminton';
import BadmintonViewScore from './Sports/Badminton/BadmintonViewScore';
import Editscore from './Sports/Badminton/Editscore';
import TableTennis from './Sports/TableTennis/TableTennis';
import AddMatch from './Sports/Badminton/AddMatch';
import {UserContext} from '../UserContext';
// import Login from './Login';

import Profile from '../component/Profile';
import Username from '../component/Username';
import Register from '../component/Register';
import Password from '../component/Password';
import Recovery from '../component/Recovery';
import Reset from '../component/Reset';
import PageNotFound from '../component/PageNotFound';

import { AuthorizeUser, ProtectRoute } from '../middleware/auth';



function App() {
	useEffect(() => {
		if(localStorage.islogin===undefined)
		{
		localStorage.setItem('islogin','')
		}
	}, [])
    const value= (localStorage.getItem('islogin')==='')? false : true;
	
	const [admin,setAdmin]=useState(value)
	return (
		<>
		<UserContext.Provider value={{admin,setAdmin}}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/badminton" element={<Badminton />} />
				<Route exact path="/tabletennis" element={<TableTennis />} />
				<Route exact path="/addmatch/:sport" element={<AddMatch/>} />
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
