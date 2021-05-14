import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
render() {
	return (
		<div className="topic">
		<h1 className="subtopic">My Education</h1>
		<Widecard title="UTD" where="University of Texas at Dallas" from="2021" to="Present"/>
		<Widecard title="Information Technology" where="University of Southern Mississippi" from="August 2016" to="2020"/>

		</div>
	);
  }
}
export default Education;