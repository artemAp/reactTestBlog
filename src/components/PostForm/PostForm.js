import React from 'react';
import PropTypes from 'prop-types';

class AddPostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fieldVal: this.props.fieldVal,
    };

    this.createPost = this.createPost.bind(this);
  }

  createPost(event) {
    event.preventDefault();
    // take the data from the form and create an object
    const post = this.state.fieldVal;
    // add the post to the App State
    this.props.addPost(post);
  }

  render() {
    return (
        <div className="callout secondary form-area">
          <h5>{this.props.title}</h5>
          <form className="post-edit" ref="postForm" onSubmit={this.createPost}>
            <label>Post Title
              <input type="text" ref="title" placeholder="Post Title"
                     value={this.state.fieldVal.title} required
                     onChange={(e) => {
                       this.setState({fieldVal: {...this.state.fieldVal, title: e.target.value}})
                     }}/>
            </label>
            <label>Author Name
              <input type="text" ref="name" placeholder="Full Name required" required
                     value={this.state.fieldVal.name}
                     onChange={(e) => {
                       this.setState({fieldVal: {...this.state.fieldVal, name: e.target.value}})
                     }}/>
            </label>
            <label>Post Body
              <textarea
                  ref="desc"
                  placeholder="Write your post here" required
                  value={this.state.fieldVal.desc}
                  onChange={(e) => {
                    this.setState({fieldVal: {...this.state.fieldVal, desc: e.target.value}})
                  }}/>
            </label>
            <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
              <input type="url" ref="image" placeholder="The URL of the featured image for your post" required
                     value={this.state.fieldVal.image}
                     onChange={(e) => {
                       this.setState({fieldVal: {...this.state.fieldVal, image: e.target.value}})
                     }}/>
            </label>
            <button type="submit" className="button">{this.props.btn}</button>
          </form>
        </div>
    )
  }
}

AddPostForm.propTypes = {
  addPost: PropTypes.func,
  title: PropTypes.string,
  btn: PropTypes.string,
  fieldVal: PropTypes.object,
};

export default AddPostForm;