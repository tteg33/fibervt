import "./App.css";
import GltfRenderer from './components/GltfRenderer.js';
import Toolbar from './components/ToolBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, Component } from 'react';
import Home from './pages/Home.js';
import Upload from './pages/Upload/Upload.js';
import Dropzone from './components/Dropzone.js';
import { onChange } from './components/Dropzone.js';
import SharedLayout from'./layouts/SharedLayoutwithBar.js';
import SignIn from './pages/Login/SignIn.js';
import History from './pages/History/History.js';
class App extends Component {
	constructor(props){
	super(props);
        this.state = {dataUri: './scene.glb',};
	}
	render(){
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
	<Route path='Upload' element={<Dropzone onChange={this.onChange.bind(this)}/>}/> 
	</Route>
	</Routes>
	</BrowserRouter>)};
}

export default App;
