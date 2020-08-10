/* eslint-disable no-restricted-globals */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';

class Main extends Component {

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
          render={(history) => (
            <AddPhoto {...this.props} onHistory={history} />
          )} />
        <Route path="/single/:id" render={(params) => (
          <Single {...this.props} {...params} />
        )} />
      </div>
    );
  }
}

export default Main;
