import React from 'react';

class RecentReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let review = this.props.review;
		return (
			<div>
				<div className="recent-reviews-box">
					<img src={review.photoURL} className="restaurant-map"/>
					<p className="restaurant-text">
						<div className="restaurant-name"><b>{review.name}</b>
							<span className="review-date">
					{review.createddate}</span>
					</div>
						<br/>
					<b>Reviews:&nbsp;</b> 
						{review.star === 1 ? <span>☆</span> : ''}
						{review.star === 2 ? <span>☆☆</span> : ''}
						{review.star === 3 ? <span>☆☆☆</span> : ''}
						{review.star === 4 ? <span>☆☆☆☆</span> : ''}
						{review.star === 5 ? <span>☆☆☆☆☆</span> : ''}
						<br/><br/>
						<b>{review.firstname} {review.lastname}:</b> {review.comment}
					</p>
	      		</div>
	      	</div>

		);
	}
}

export default RecentReview;