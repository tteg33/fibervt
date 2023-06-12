import React, { Component } from "react";
import { DropzoneArea } from "mui-file-dropzone";
import Button from "@mui/material/Button";
import Link from "react-router-dom";


class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return <div>
		  <DropzoneArea onChange={this.handleChange.bind(this)}/>
		  <Link to={'/'}>
		  <Button variant="contained">Render</Button>
		  </Link>
			  </div>
		  
  }
}

export default DropzoneAreaExample;
