 import React, { Component } from 'react';

 class HelloWorld extends Component {
    state = {
         who: 'world'
     }
     handleWorldClick = (button) => {
        this.setState({
            who: button
        })
     }
     render(){
         return(
            <div className="App">
          <p>
            Hello {this.state.who}
          </p>
         <button onClick={ () => this.handleWorldClick('world!')}>World</button> 
         <button onClick={ () => this.handleWorldClick('friend!')}>Friend</button>
         <button onClick={ () => this.handleWorldClick('React!')}>React</button>
          
            </div>
        );
    }
 }
 export default HelloWorld