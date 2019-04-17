import React, { Component } from 'react';

class Accordian extends Component {
    
    constructor(props) {
        super(props)
      }
    
    state = {
       sections : this.props.sections,
       activeIndex: null
    }
    handleClickedInfo = (index) => {
        this.setState({
        activeIndex: index
        })
        console.log(index)
    }

    render(){
        return(
           <ul>

            {this.state.sections.map((section,index) => 
            <li key = {index}>
                <button onClick = {() => this.handleClickedInfo(index)}>{section.title}</button> 
                <p>{this.state.activeIndex === index ? section.content:null}</p>
            </li>)}
               
           </ul>
       );
   }
}
export default Accordian