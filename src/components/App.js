import React, {Component} from 'react';

import Title from './Title';
import PhotoWall from './PhotoWall';

function fetchFromDatabase() {
  return [
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
  ];
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  componentDidMount() {
    const data = fetchFromDatabase();
    this.setState({
      posts: data
    });
  }

  render() {
    return (
      <div>
        <Title title={'PhotoWall'} />
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

export default App;
