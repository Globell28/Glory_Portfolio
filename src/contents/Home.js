import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/Purple_flower_(4764445139).jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class Home extends Component {
 render() {
	return (
	<div className="topic homePage">
	 <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
	 <ReactTypingEffect className="typingeffect"
	  text={['My name is Glory Joe-Ibekwe','I am a software developer']} speed={100} eraseDelay={700}/>
	 <Social />
	 </div>
	);
  }
}
export default Home;