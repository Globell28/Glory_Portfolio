import React, { Component } from 'react';
import styled from 'styled-components';

/*const Bold = styled.h4`
       font-weight: bold;
	`;*/

class About extends Component {

	render() {
	 return (
	 <div className="topic">
		<h1 className="subtopic">About Me</h1>
		<h4>Hey there,</h4>
		<h1>My name is Glory Joe-Ibekwe </h1>
		<h3>Software Developer </h3>
		<br></br>
		<p> My name is Glory Joe-Ibekwe. I graduated with  Magna Cum Laude Latin distinction 
		 from the University of Southern Mississippi with Bachelors in Information Technology.
		 I graduated in  December 2020  with a GPA of 3.662. I am interested in Software development 
		 and database management but I am equally open to other areas in Information Technology.
		 To learn more about me or to ask questions, You can contact me at:
			<li>Email: glory.ezinne@yahoo.com</li>
			<li>Phone: 6014660572 </li>
		</p>
	 	</div>
		)
	}
}
export default About;