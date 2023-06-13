import React, { Component } from "react";
import { DropzoneArea } from "mui-file-dropzone";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const fileToDataUri = (files) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onload = (event) => {
		resolve(event.target.result)};
	if(files[0]){
	reader.readAsDataURL(files[0]);}
});


class GlbDropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {dataUri: './scene.glb',}; 
 }
  onChange(files) {
    this.setState({
      dataUri: fileToDataUri(files),
    })
 }  

   
//onChange(event) {
//  let reader = new FileReader();
//  reader.onload = function(event) {
//      this.setState({dataUri: reader.result})
// }
//reader.readAsDataURL(event.target.files[0]);
//}  


  render() {
    return <div>
		  <DropzoneArea onChange={this.props.onChange()}/>
		  <Link to='/'>
		  <Button variant="contained">Render</Button>
		  </Link>
			  </div>
		  
  }
}

export default GlbDropzone;
