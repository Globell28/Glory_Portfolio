import React, { Component } from 'react';

class Project extends Component {

 constructor(props)
 {
	super(props);
		this.state={
		'myProject':['Decentralized Online Voting Application using Solidity, CSS, HTML, Bootstrap: https://github.com/Globell28/marketplace',
		'Blockchain Market Place Application using Solidity, CSS, HTML, Bootstrap: https://github.com/Globell28/marketplace ',
		'Calculator Mobile Application using Java programming: https://github.com/Globell28/glo',
		'Java Step Counter Application: https://github.com/Globell28/stepCounter']
	};
 }

render() {
 return (
	<div className="topic skills">
	<h1 className="subtopic">My Projects</h1>
   	<ul>
		{this.state.myProject.map((value)=>{
		return <li>{value}</li>
		})}
   	</ul>
  	</div>
 	)
  }
}
export default Project;