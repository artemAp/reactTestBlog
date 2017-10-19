import React from 'react';
import PropTypes from 'prop-types';
import h from '../../helpers'

class Post extends React.Component {
  tryClick() {
    alert('just trying out click events lalala');
  }

  render() {
    const com = "Comments";
    return (
        <div className="blog-post">
          <h3 className="ptitle">{this.props.ptitle}
            <small>{this.props.date}</small>
          </h3>
          <img className="thumbnail" src={this.props.pimg}/>
          <p>{this.props.postbody}</p>
          <div className="callout callout-post">
            <ul className="menu simple">
              <li><a href="#" onClick={this.tryClick}>Author: {this.props.author}</a></li>
              <li><a href="#">{com}: {this.props.comments}</a></li>
              <li><a href="#">Tags: {h.getTaggedName()}</a></li>
            </ul>
          </div>
        </div>
    )
  }
}

Post.propTypes = {
  ptitle: PropTypes.string,
  date: PropTypes.string,
  pimg: PropTypes.string,
  postbody: PropTypes.string,
  author: PropTypes.string,
  comments: PropTypes.string,
};

export default Post;