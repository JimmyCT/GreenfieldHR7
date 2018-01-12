import React from 'react';
import $ from 'jquery';

class SearchByRestaurantNearMe extends React.Component {
    constructor(props) {
  		  super(props);

  		  this.state = {restaurants: []};

  		  this.handleSearch = this.handleSearch.bind(this);
    }

	handleSearch() {
		$.ajax({
			url: '/restaurant/near',
			method: 'GET',
			success: (restaurants) => {
				console.log(restaurants);
				//this.props.handleSearchResults(restaurants);
			}, 
			failuire: (err) => {
				console.error(err);
			}
		});
	}
		


    render() {
  		  return (
  		  	<div>
            	<button onClick={this.handleSearch}>Near Me</button>
            </div>
        )
  	}
}


export default SearchByRestaurantNearMe;