import PostList from '../../../components/PostList';
import { View } from 'react-native';
import { somePosts } from '../../../constants/somePosts';

const PostsScreen = () => {
    return (
        <View style={{flex:1}}>
          <PostList posts={somePosts} />
        </View>
    )
}

export default PostsScreen;
