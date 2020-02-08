
// Importing combination 
import React, {Component} from 'react'; 
// import Box from 'matera'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// Importing Module
import ReactDOM from 'react-dom'; 

class SectionType1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <Box className="square">
        {/* Value is {this.props.value} */}
        {/* {this.props.children} <br /> */}
        <Box component="span" m={1}>
          
          <Button variant="contained" color="primary">
          Test button   
          </Button>
          {/* asdfasfadsf asdf asadsfasfd asdf hey */}

        </Box>
        {/* if ur reading this its the render output */}
      </Box>
    );
  }
}

export default SectionType1;