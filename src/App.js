import "./App.css";
import GltfRenderer from './components/GltfRenderer.js';
import Toolbar from './components/ToolBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, Component } from 'react';
import Home from './pages/Home.js';
import Upload from './pages/Upload/Upload.js';
import Dropzone from './components/Dropzone.js';
import { fileToDataUri, defaultUri } from './utils/helper.js';
import SharedLayout from'./layouts/SharedLayoutwithBar.js';
import SignIn from './pages/Login/SignIn.js';
import History from './pages/History/History.js';
class App extends Component {
	constructor(props){
	super(props);
        this.state = {
		dataUri: '/scene.glb',
	        user: 'guest',
	        token: '',
	        signup: false,
	        init: true,
	        files: [],
	};
	this.handleUpload = this.handleUpload.bind(this);
	}

	handleLogin = (user) => {
		this.setState({
			user: user,
			signup: false,
			init: false,})
	}

	logout = () => {
		this.setState({
			user: 'guest',
			token: '',
		})
	}

        handleUpload = (files, event) => {
	 console.log("appjs handleupload")	
		this.setState({
			dataUri: fileToDataUri(files, event),
		        files: files})
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
         <Route index element={<GltfRenderer dataUri={this.state.dataUri}
		  />}/>
	<Route path='Login' element={<SignIn/>}/>
	<Route path='History' element={<History/>}/>
	<Route path='Upload' element={<Dropzone handleUpload={this.handleUpload}/>}/> 
	</Route>
	</Routes>
	</BrowserRouter>)};
}

export default App;
