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


import Profile from './component/Profile';
import Username from './component/Username';
import Register from './component/Register';
import Password from './component/Password';
import Recovery from './component/Recovery';
import Reset from './component/Reset';
import PageNotFound from './component/PageNotFound';

import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import Webex from './Components/Webex';
import Tab from './Components/Tab';



function App() {
	// useEffect(() => {
	// 	if(localStorage.islogin===undefined)
	// 	{
	// 	localStorage.setItem('islogin','')
	// 	}
	// }, [])
    // const value= (localStorage.getItem('islogin')==='')? false : true;
	
	const [admin,setAdmin]=useState(false)
	return (
		<>
		<UserContext.Provider value={{admin,setAdmin}}>
			<Navbar />
			{/* <Webex/> */}
			{/* <Tab/> */}
			<Routes>
				<Route path="/" element={<Tab />} />
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







// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// /** import all components */
// import Username from './component/Username';
// import Password from './component/Password';
// import Register from './component/Register';
// import Profile from './component/Profile';
// import Recovery from './component/Recovery';
// import Reset from './component/Reset';
// import PageNotFound from './component/PageNotFound';

// import Home from './Components/Home';
// import Badminton from './Components/Sports/Badminton/Badminton';
// import TableTennis from './Components/Sports/TableTennis/TableTennis';
// import AddMatch from './Components/Sports/Badminton/AddMatch';
// import BadmintonViewScore from './Components/Sports/Badminton/BadmintonViewScore';
// import Editscore from './Components/Sports/Badminton/Editscore';


// /** auth middleware */
// import { AuthorizeUser, ProtectRoute } from './middleware/auth'

// /** root routes */ 
// const router = createBrowserRouter([
//     {
//         path : '/userlogin',
//         element : <Username></Username>
//     },
//     {
//         path: '/',
//         element: <Home />
//     },
//     {
//         path: '/badminton',
//         element: <Badminton />
//     },
//     {
//         path: '/tabletennis',
//         element: <TableTennis />
//     },
//     {
//         path: '/addmatch/:sport',
//         element: <AddMatch/>
//     },
//     {
//         path: '/badmintonscore/:id',
//         element:<BadmintonViewScore />
//     },
//     {
//         path: '/editscore/:id/:set',
//         element: <Editscore />
//     },
//     {
//         path : '/register',
//         element : <Register></Register>
//     },
//     {
//         path : '/password',
//         element : <ProtectRoute><Password /></ProtectRoute>
//     },
//     {
//         path : '/profile',
//         element : <AuthorizeUser><Profile /></AuthorizeUser>
//     },
//     {
//         path : '/recovery',
//         element : <Recovery></Recovery>
//     },
//     {
//         path : '/reset',
//         element : <Reset></Reset>
//     },
//     {
//         path : '*',
//         element : <PageNotFound></PageNotFound>
//     },
// ])

// export default function App() {
//   return (
//     <main>
//         <RouterProvider router={router}></RouterProvider>
//     </main>
//   )
// }
