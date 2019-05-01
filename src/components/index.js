import React, { Component } from 'react';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <h1>I have the flu and want to die :( .</h1>
        <img src="https://res.cloudinary.com/pieol2/image/upload/v1556650736/flu.jpg" alt="me looking sorry" width="800" />
      </React.Fragment>
    );
  }
}
 
export default Page;