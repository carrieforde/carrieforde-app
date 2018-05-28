import React, { Component } from 'react';
import Utilities from './utilities';

class GetPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.utils = new Utilities();

    this.updatePosts = this.updatePosts.bind(this);
  }

  updatePosts(posts) {
    this.setState({ posts });
  }

  componentDidMount() {
    const { count } = this.props;
    this.utils.getData(`portfolio${count ? '?per_page=${count}' : ''}`, this.updatePosts);
  }

  render() {
    const { posts } = this.state;

    console.log(posts); // eslint-disable-line no-console

    return <div>posts will load here.</div>;
  }
}

export default GetPosts;
