import { 
    SafeAreaView,
    View,
    FlatList,
    Text,
} from 'react-native';



const PostList = () => {
    return (
        <View>
            <SafeAreaView style={{}}>
                <FlatList
                data={[]}
                renderItem={({item}) => (<></>)}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default PostList;
