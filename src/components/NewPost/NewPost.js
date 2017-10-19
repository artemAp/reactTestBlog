import React from 'react'
import PropTypes from 'prop-types';
import h from '../../helpers'

class NewPost extends React.Component {

  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(){
    this.props.deletePost(this.props.index);
  }

  // editPost(){
  //
  // }

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
            {/*<span className="button">Edit</span>*/}
          </div>
        </div>
    )
  }
}

NewPost.propTypes = {
  details: PropTypes.object,
  index: PropTypes.string,
  deletePost: PropTypes.func,
  // editPost: PropTypes.func,
};

export default NewPost;