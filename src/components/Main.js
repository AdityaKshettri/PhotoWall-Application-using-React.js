import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';

class Main extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.startLoadingPosts()
      .then(() => {
        this.setState({
          loading: false
        });
      });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route 
          exact
          path="/" 
          render={() => (
              <PhotoWall {...this.props} />
          )} />
        <Route
          path="/addPhoto"
          render={() => (
            <AddPhoto {...this.props} />
          )} />
        <Route path="/single/:id" render={(params) => (
          <Single 
            loading={this.state.loading} 
            {...this.props} 
            {...params} />
        )} />
      </div>
    );
  }
}

export default Main;
