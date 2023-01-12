import { StackNavigator } from 'react-native-navigation';
import ForumList from './src/components/ForumList';
import ForumPage from './src/components/ForumPage';
const ForumNavigator = StackNavigator({
  ForumList: { screen: ForumList },
  ForumPage: { screen: ForumPage },
});

export default ForumNavigator;
