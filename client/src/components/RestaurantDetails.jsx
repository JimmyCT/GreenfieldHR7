import React from 'react';
import WriteReview from './WriteReview.jsx';
import $ from 'jquery';

class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)

		this.handleBookmark = this.handleBookmark.bind(this);
	}

	handleBookmark() {
		if (this.props.user) {	
			var query = {
				userId: this.props.user.id,
				restaurantId: this.props.restaurant.id
			}

			$.ajax({
				url: '/restaurant/bookmark',
				method: 'POST',
				contentType: 'application/json',
    			data: JSON.stringify(query),
    			complete: () => {
    			},
    			failure: (err) => {
    				console.error(err);
    			}
			});
		}
	}

	handleReviewSubmit(review, event) {
		var reviewInfo = {userId: this.props.user.id, restaurantId: this.props.restaurant.id, reviewComment: review.comment, reviewStars: review.stars}
		$.ajax({
			url: `/user/review`,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(reviewInfo),
			success: () => {
				console.log('Review post request successfuly sent');
			},
			error: (err) => {
				console.error('ERROR:', err);
			}
		})
		event.preventDefault();
	}

	render() {
		console.log(this.props.restaurant)
		let restaurant = this.props.restaurant;
		return(
			<div className="restaurant-box">
				<div className="restaurant-details">
					<img alt="map" src={restaurant.map} className="restaurant-map"/>
					<p className="restaurant-text">
						<div className="restaurant-name">
							<b>{restaurant.name}</b>
						</div>
						<br/>
						<b>Address:</b> {restaurant.address}. {restaurant.city}, {restaurant.state} {restaurant.zip}
						<br/>
						<b>Phone:</b> {restaurant.phone}
						<br/>
						<b>Price:</b> {restaurant.price}
						<br/>
						<b>Reviews:</b> 
							{restaurant.star === '1' ? <span>☆</span> : ''}
							{restaurant.star === '2' ? <span>☆☆</span> : ''}
							{restaurant.star === '3' ? <span>☆☆☆</span> : ''}
							{restaurant.star === '4' ? <span>☆☆☆☆</span> : ''}
							{restaurant.star === '5' ? <span>☆☆☆☆☆</span> : ''}
						<br/>
						{restaurant.distance ? <div><b>Distance:</b> {restaurant.distance}</div> : ''}
						<br/>
						{restaurant.recommendation ? <div>**{restaurant.recommendation}</div> : ''}						
					</p>
					<button className="reviewSubmit" onClick={this.handleBookmark}>Bookmark</button>
				</div> 
				<div className="reviewBox">
					<WriteReview handleReviewSubmit={this.handleReviewSubmit.bind(this)}/>
				</div>
      </div>
		)
	}
}

export default RestaurantDetails;