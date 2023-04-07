import PostList from '../../../components/PostList';
import { 
    Text,
    View,
} from 'react-native';

const PostsScreen = () => {
    return (
        <View style={{flex:1}}>
          <PostList />
        </View>
    )
}

export default PostsScreen;
