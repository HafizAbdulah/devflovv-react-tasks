import React, { Component } from 'react'
import Project from './Project';
import Profile from "./Profile";
import user from './assets/user.png';
import Title from './Title';
import {Route, Routes} from 'react-router-dom'
import Joke from './Joke';
import Header from './Header';
export default class App extends Component {
  
  constructor(){
    super();
    this.state = {displayBio:false
    };
     this.toggleDisplayBio= this.toggleDisplayBio.bind(this);
    }
  toggleDisplayBio(){
    this.setState({displayBio: !this.state.displayBio});
  }

  render() {
    
    return (

      <div>
        <Header/>
          <img src={user} alt='user' className='profile'/>
        <h1> Hello! </h1>
        <Title/>
        <p> i 'm looking  forward to working on meaningful projects </p>
       
        {this.state.displayBio ? (
          <div>
            <p>I live in San Francisco, and code every day.</p>
            <p>
              My favorite language is JavaScript, and I think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love music and ramen!</p>
             <button onClick={this.toggleDisplayBio}>ReadLess</button>
            </div>
            ):  <div>
            <button onClick={this.toggleDisplayBio}>Show More</button>
          
          </div> 
          }  

<Project/>
<hr />
 <Profile/>     
 <hr />
 <Joke/>

 
 

<Routes>

<Route path='/Joke' element={Joke}/>
<Route path='/project' element={Project}/>
<Route path='/profile' element={Profile}/>

</Routes>


 
      </div>
    );
  }
}
