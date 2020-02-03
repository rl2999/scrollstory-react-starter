
// Importing combination 
import React, {Component} from 'react'; 
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
      
      < div className="square" >
        Value is {
          this.props.value
        }
        {
        this.props.children
        } < br / >
        if ur reading this its the render output
        </div>
      

    );
  }
}

export default SectionType1;