import PostListItem from './PostListItem';
import { somePosts } from '../../constants/somePosts';
import { postListStyles } from './PostListStyles';
import { 
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';


const PostList = () => {
    return (
        <View style={postListStyles.postListWrap}>
            <SafeAreaView>
                <FlatList
                    data={somePosts}
                    renderItem={({item}) => <PostListItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default PostList;
