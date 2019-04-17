import React, { Component } from 'react';

class Accordian extends Component {
    
    constructor(props) {
        super(props)
      }
    
    state = {
        who: 'world'


    }

    render(){
        return(
           <ul>

            {this.props.sections.map((section) => <li>{section.title}</li>)}
               
           </ul>
       );
   }
}
export default Accordian