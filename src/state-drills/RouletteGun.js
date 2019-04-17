import React, { Component } from 'react';

class RouletteGun extends Component {
   state = {
        spinningTheChamber: false,
        chamber: null,
        bulletInChamber:8
    }
    handleWorldClick = () => {
        this.handleSettimer();
       this.setState({
           chamber: null,
           spinningTheChamber: !this.state.spinningTheChamber
       })
    }
    handleSettimer = () => {
        this.interval = setInterval(() => {
         this.setState({
                spinningTheChamber: false,
                chamber: Math.ceil(Math.random() * 8)
              })
              clearInterval(this.interval)
            }, 2000)

          }
    

    render(){
        return(
           <div className="App">
         <p>
         {this.state.spinningTheChamber && <span>spinning the chamber and pulling the trigger! ...</span>}
        { this.state.chamber && (this.state.bulletInChamber === this.state.chamber ? <span>Bang!!!</span> : <span>You live!!</span>)}
       
         </p>
        <button onClick={ this.handleWorldClick}>Pull the Trigger</button> 
        
        
         
           </div>
       );
   }
}
export default RouletteGun