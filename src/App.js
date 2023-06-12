import "./App.css";
import GltfRenderer from './components/GltfRenderer.js';
import Toolbar from './components/ToolBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.js';
import Upload from './pages/Upload/Upload.js';
import SharedLayout from'./layouts/SharedLayoutwithBar.js';
import SignIn from './pages/Login/SignIn.js';
import History from './pages/History/History.js';
export default function App() {
	return(
	//	<div>
	//	<Toolbar />
	//	<GltfRenderer />
	//	</div>
	<BrowserRouter>
	<Routes>
	<Route path='/' element={<SharedLayout />}>
         <Route index element={<GltfRenderer />} />
	<Route path='Login' element={<SignIn/>}/>
	<Route path='History' element={<History/>}/>
	<Route path='Upload' element={<Upload/>}/> 
	</Route>
	</Routes>
	</BrowserRouter>);
}
