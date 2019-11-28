import React, { Component } from "react";
import axios from "axios";

class PostDetail extends Component {
  state = {
    id: null,
    post: {}
  };

  componentDidMount() {
    const postId = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(res => {
        this.setState({ post : res.data});
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div className="post card darken-1">
        <div className="card-content gray-text">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
}

export default PostDetail;
