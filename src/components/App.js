import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "Sunrise",
          imageLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg"
        },
        {
          id: "1",
          description: "Sunset",
          imageLink: "https://savoiragile.com/wp-content/uploads/2015/05/shutterstock_124738093.jpg"
        },
        {
          id: "2",
          description: "Beach",
          imageLink: "https://wallpapercave.com/wp/JYodMo6.jpg"
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(postRemoved) {
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  render() {
    return (
      <div>
        <Route 
          exact
          path="/" 
          render={() => (
            <div>
              <Title title={'PhotoWall'} />
              <PhotoWall 
                posts={this.state.posts} 
                onRemovePhoto={this.removePhoto} />
          </div>
          )}/>
        <Route
          path="/addPhoto"
          component={AddPhoto} />
      </div>
    );
  }
}

export default App;
