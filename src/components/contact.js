import React from 'react'
import '../style.css/main.css'

 export default class Contact extends React.Component {
	render() {
		return (
			<li className="contact">
				<img className="contact-img" src={this.props.img} width="60px" height="60px"/>
				<div className="contact-info">
					<div className="contact-name" >{this.props.name}</div>
					<div className="contact-surname" >{this.props.surname}</div>
					<div className="contact-phone" >{this.props.phone}</div>
				</div>
			</li>			
		)
	}
}