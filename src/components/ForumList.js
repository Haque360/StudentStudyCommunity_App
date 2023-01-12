import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';

class ForumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
        { id: 4, title: 'Post 4' },
        { id: 5, title: 'Post 5' },
        { id: 6, title: 'Post 5' },
      ],
    };
  }

  goToForumPage = (postId) => {
    this.props.navigation.navigate('ForumPage', { postId });
  };

  renderPost = ({ item }) => (
    <TouchableOpacity onPress={() => this.goToForumPage(item.id)}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={this.state.posts}
        renderItem={this.renderPost}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default ForumList;
