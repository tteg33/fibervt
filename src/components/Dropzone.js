import React, { Component } from "react";
import { DropzoneArea } from "mui-file-dropzone";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {fileToDataUri} from "../utils/helper.js";

//const fileToDataUri = (files) => new Promise((resolve, reject) => {
//	const reader = new FileReader();
//	reader.onload = (event) => {
//		resolve(event.target.result)};
//	if(files[0]){
//	reader.readAsDataURL(files[0]);}
//});


class GlbDropzone extends Component {
  constructor(props) {
    super(props);
    this.onDrop= this.onDrop.bind(this);
  }
 
  onDrop(files, event) {
    this.props.handleUpload(files, event);
 }  
  componentDidUpdate() {
	  this.onDrop();}
   
//onChange(event) {
//  let reader = new FileReader();
//  reader.onload = function(event) {
//      this.setState({dataUri: reader.result})
// }
//reader.readAsDataURL(event.target.files[0]);
//} 

  render()

  {
    return <div>
		  <DropzoneArea 
	  maxFIleSize= '50000000000000'
	  onDrop={(files, event) => this.props.handleUpload}

		  />
		  <Link to={{
			  pathname: '/',
		          state: {dataUri: this.props.dataUri}
		  }}>
		  <Button variant="contained">Render</Button>
		  </Link>
			  </div>
		  
  }
}

export default GlbDropzone;
