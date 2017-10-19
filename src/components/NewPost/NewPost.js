import React from 'react';
import PropTypes from 'prop-types';
import h from '../../helpers';
import PostForm from '../PostForm';

class NewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  deletePost(){
    this.props.deletePost(this.props.index);
  }

  editPost(postData){
    this.props.editPost(this.props.index, postData);
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const details = this.props.details;
    return (
        <div className="blog-post" key={this.props.index}>
          <h3 className="ptitle">{details.title}
            <small>{h.getTime()}</small>
          </h3>
          <img className="thumbnail" src={details.image} alt={details.name}/>
          <p>{details.desc}</p>
          <div className="callout callout-post">
            <ul className="menu simple">
              <li><a href="#">Author: {details.name}</a></li>
              <li><a href="#">Comments: 0</a></li>
              <li><a href="#">Tags: {h.getTaggedName()}</a></li>
            </ul>
          </div>
          <div className="actions">
            <span className="button" onClick={this.deletePost}>Delete</span>
            <span className="button" onClick={() => this.setState({isOpen: true})}>Edit</span>
          </div>
          {this.state.isOpen && <PostForm
              addPost={this.editPost}
              title="Edit a Post to the React Blog"
              btn="Edit Post"
              fieldVal={{
                title: details.title,
                desc: details.desc,
                name: details.name,
                image: details.image,
              }}
          />}
        </div>
    )
  }
}

NewPost.propTypes = {
  details: PropTypes.object,
  index: PropTypes.string,
  deletePost: PropTypes.func,
  editPost: PropTypes.func,
};

export default NewPost;