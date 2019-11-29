import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ninja from "../image/ninja.png";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card darken-1" key={post.id}>
            <img src={ninja} className="ninja" alt="ninja image"></img>
            <div className="card-content gray-text">
              <Link to={"/" + post.id} className="card-title red-text">
                {post.id}) {post.title}
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="center">no posts yet!</h1>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    );
  }
}

export default Home;
