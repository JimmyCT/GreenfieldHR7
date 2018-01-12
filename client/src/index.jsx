import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/Search.jsx';
import MyBookmarksList from './components/MyBookmarksList.jsx';
import MyReviewsList from './components/MyReviewsList.jsx';
import LoginButton from './components/LoginButton.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {view: 'search'};

	    this.changeView = this.changeView.bind(this);
	}

	changeView(option) {
    	this.setState({view: option});
  	}

  	renderView() {
    	if (this.state.view === 'search') {
      		return <Search changeView={this.changeView} />
    	} else if (this.state.view === 'bookmarks') {
      		return <MyBookmarksList changeView={this.changeView} />
    	} else if (this.state.view === 'reviews') {
      		return <MyReviewsList changeView={this.changeView} />
    	}
  	}

	render() {
		return (
			<div>
        		<div className="nav">
          			<span className="logo">Yowl</span>
          			<span className={this.state.view === 'search'
			            ? 'nav-selected'
			            : 'nav-unselected'}
			            onClick={() => this.changeView('search')}>
			            Search
		          	</span>
		          	<span className={this.state.view === 'bookmarks'
			            ? 'nav-selected'
			            : 'nav-unselected'}
			            onClick={() => this.changeView('bookmarks')}>
			            My Bookmarks
          			</span>
          			<span className={this.state.view === 'reviews'
			            ? 'nav-selected'
			            : 'nav-unselected'}
			            onClick={() => this.changeView('reviews')}>
			            My Reviews
          			</span>
          			<LoginButton />
        		</div>

        		<div className="main">
					{this.renderView()}
				</div>
      		</div>
		);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

