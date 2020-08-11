import React, {Component} from 'react';

import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find(post => post.id === id);
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex(post => post.id === id);

        if(this.props.loading) {
            return <div className="loader">Loading...</div>
        } 
        else if(post) {
            return (
                <div className="single-photo">
                    <Photo 
                        post={post} 
                        index={index} 
                        {...this.props} />
                    <Comments 
                        id={id}  
                        comments={comments}
                        startAddingComment={this.props.startAddingComment} />
                </div>
            );
        } 
        else {
            return <h1>Sorry... No Posts found...</h1>;
        }
    }
}

export default Single;