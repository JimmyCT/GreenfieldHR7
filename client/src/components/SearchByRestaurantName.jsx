import React from 'react';
import $ from 'jquery';

class SearchByRestaurantName extends React.Component {
	constructor(props) {
		super(props)
	}

	handleSearchClick(name) {
      $.ajax({
      	url: `/restaurant/name/${name}`,
      	method: 'GET',
      	contentType: 'application/json',
      	success: (results) => {
      	    console.log('front end get data from server', results[0])
            this.props.handleSearchResults(results);
      	},
      	error: (err) => {
      		console.log(err);
      	}
      })
	}

	render() {
		return (
			<div className="col">
				<input type="text" placeholder="name" ref={input=>this.restaurantName = input} /><br/>
				<button onClick={() => this.handleSearchClick(this.restaurantName.value)} >Search by Restaurant Name</button>
			</div>
		)
	}
}

export default SearchByRestaurantName;
