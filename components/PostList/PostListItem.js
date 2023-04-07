import { 
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { EvilIcons, AntDesign  } from '@expo/vector-icons'; 

const PostListItem = ({name, mail, avatar, thumbnail, postTitle, comments, likes, location}) => {
    return (
        <View>
             <View style={postListItemStyles.userImgWrap} >
                <Image style={postListItemStyles.userImg} source={avatar} />
                <View>
                    <Text>{name}</Text>
                    <Text>{mail}</Text>
                </View>
            </View>
            <View>
                <Image style={{}} source={thumbnail} />
                <View>
                    <Text>{postTitle}</Text>
                </View>
                <View>
                    <View>
                        <EvilIcons name="comment" size={24} />
                        {comments}
                    </View>
                    <View>
                        <AntDesign name="like2" size={24} />
                        {likes}
                    </View>
                    <View>
                        <EvilIcons name="location" size={24} />
                        <Text>{location}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PostListItem;
