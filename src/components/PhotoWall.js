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
                        this.props.posts
                            .sort(function(x, y) {
                                return y.id - x.id;
                            })
                            .map((post, index) => {
                                return (
                                    <Photo 
                                        key={index} 
                                        post={post}
                                        {...this.props}
                                        index={index} />
                                );
                            })
                    }
                </div>
            </div>
        );
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PhotoWall;
