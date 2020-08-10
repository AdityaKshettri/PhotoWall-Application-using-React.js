import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photo extends Component {
    render() {
        const post = this.props.post;
        return (
            <figure className="figure">
                <Link to={`/single/${post.id}`}>
                    <img className="photo" src={post.imageLink} alt={post.description} />
                </Link>
                <figcaption>
                    <p>{post.description}</p>
                </figcaption>
                <div className="button-container">
                    <button onClick={() => {this.props.removePost(this.props.index)}}>
                    Remove</button>
                </div>
            </figure>
        );
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;