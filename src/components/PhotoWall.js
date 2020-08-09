import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        return (
            <div>
                <Link to="/addPhoto" className="addIcon" />
                <div className="photoGrid">
                    {
                        this.props.posts.map((post, index) => {
                            return (
                                <Photo 
                                    key={index} 
                                    post={post} 
                                    onRemovePhoto={this.props.onRemovePhoto} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;
