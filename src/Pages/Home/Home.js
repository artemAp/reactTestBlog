import React from 'react'
import Banner from '../../components/Banner'
import Post from '../../components/Post'
import PostForm from '../../components/PostForm'
import NewPost from '../../components/NewPost'

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };

    this.addPost = this.addPost.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(post) {
    const timestamp = (new Date()).getTime();
    // update the state object
    this.state.posts['post-' + timestamp] = post;
    // set the state
    this.setState({posts: this.state.posts});
  }

  deletePost(key) {
    delete this.state.posts[key];
    this.setState({
      posts: this.state.posts
    });
  }

  editPost(key, data) {
    this.state.posts[key] = data;
    this.setState({
      posts: this.state.posts
    });
  }

  renderPost(key) {
    return <NewPost
        key={key}
        index={key}
        deletePost={this.deletePost}
        editPost={this.editPost}
        details={this.state.posts[key]}
    />
  }

  render() {
    const imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-" +
        "Balaton_Hungary_Landscape.jpg";
    const imgTwo = "https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
    const imgThree = "https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
    const imgFour = "https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
    const dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo " +
        "dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper " +
        "orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. " +
        "Nulla at nulla justo, eget luctus.";
    return (
        <div>
          <Banner />
          <div className="row medium-8 large-7 columns">
            <Post ptitle="Flux flack" pimg={imgOne} date="Nov 2, 2015" postbody={dummyPost} author="Fred Armisen"
                  comments="2" tags=""/>
            <Post ptitle="Inline Styles Aren't Necessary" pimg={imgTwo} postbody={dummyPost} date="Aug 15, 2015"
                  author="Amy Schumer" comments="5"/>
            <Post ptitle="Webpack and ES6" pimg={imgThree} date="Mar 9, 2015" postbody={dummyPost}
                  author="Victoria Bell" comments="3"/>
            <Post ptitle="No More Goobers" pimg={imgFour} date="Jan 11, 2015" postbody={dummyPost}
                  author="Jack Sherlock" comments="7"/>

            <div className="list-of-posts">
              {Object.keys(this.state.posts).map(this.renderPost)}
            </div>
            <PostForm
                addPost={this.addPost}
                title="Add a Post to the React Blog"
                btn="Add Post"
                fieldVal={{
                  title: '',
                  desc: '',
                  name: '',
                  image: '',
                }}
            />
          </div>
        </div>
    )
  }
}

export default Home;