import { 
    Text,
    View,
    Image,
} from 'react-native';
import { commentListStyles } from './CommentListStyles';

const CommentCard = ({ item }) => {
    const { avatar, text, meta, type } = item;
    if(type === 'my'){
        return (
            <View style={commentListStyles.cardMy}>
                <View style={commentListStyles.leftMy}>
                    <Image style={commentListStyles.avatar} source={{ uri: avatar }} />
                </View>
                <View style={commentListStyles.rightMy}>
                    <Text style={commentListStyles.text}>{text}</Text>
                    <Text style={commentListStyles.metaMy}>{meta}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={commentListStyles.card}>
            <View style={commentListStyles.left}>
                <Image style={commentListStyles.avatar} source={{ uri: avatar }} />
            </View>
            <View style={commentListStyles.right}>
                <Text style={commentListStyles.text}>{text}</Text>
                <Text style={commentListStyles.meta}>{meta}</Text>
            </View>
        </View>
    )
}

export default CommentCard;
