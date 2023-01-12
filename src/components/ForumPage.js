import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ForumPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        id: this.props.navigation.getParam('postId'),
        title: '',
        body: '',
        author: '',
        comments: [],
      },
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>{this.state.post.title}</Text>
        <Text>{this.state.post.body}</Text>
        <Text>{this.state.post.author}</Text>
      </View>
    );
  }
}

export default ForumPage;
