import React from 'react'
import Contact from './contact'
import '../style.css/main.css'

var contacts = [
{
	id: 1,
	name: "Dmitrii",
	surname: "Vasilev",
	phone: "+79034300037",
	img: "https://pp.userapi.com/c836123/v836123802/616b6/NPMkAoLw8j4.jpg"
},
{
	id:2,
	name: "Jane",
	surname: "Chumakova",
	phone: "+79614227585",
	img: "https://pp.userapi.com/c637529/v637529778/5980d/Hr6IE1MQF5k.jpg"
},
{	
	id: 3,
	name: "Vladislav",
	surname: "Starikh",
	phone: "+79035577383",
	img: "https://pp.userapi.com/c824601/v824601547/a3f4e/T7W50Y1j1UM.jpg",			
},
{
	id: 4,
	name: "Alex",
	surname: "Garbuzov",
	phone: "+790348556262",
	img: "https://pp.userapi.com/c638531/v638531072/3f891/vZ9pPzaF_lY.jpg"
}
]


class NameList extends React.Component {

	constructor() {
		super();
		this.state = {
			localContacts: contacts
		}
		this.inputHandler = this.inputHandler.bind(this);

	}

	inputHandler(event) {
		var currentInputValue = event.target.value.toLowerCase();
		var displayedContacts = contacts.filter(function(item) {
			var element = item.surname.toLowerCase();
			return element.indexOf(currentInputValue) != -1;
		})
		console.log(displayedContacts);
		this.setState ({
			localContacts: displayedContacts
		})
	}
	render() {
		return (
			<div className="contacts">
				<input type="text" className="contacts-input" onChange={this.inputHandler} />
				<ul className="contacts-list">
				{
					this.state.localContacts.map(function(item) {
						return (
							 <Contact 
							 	key = {item.id}
								img = {item.img}
								name = {item.name} 
								surname = {item.surname}
								phone = {item.phone}
							/>
						);
					})
				}
				</ul>
			</div>
		)
	}
}
export default NameList;