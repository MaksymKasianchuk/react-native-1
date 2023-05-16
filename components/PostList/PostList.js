import PostListItem from './PostListItem';
import { postListStyles } from './PostListStyles';
import { 
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';


const PostList = ({ posts }) => {
    return (
        <View style={postListStyles.postListWrap}>
            <SafeAreaView>
                <FlatList
                    data={posts}
                    renderItem={({item}) => <PostListItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default PostList;
