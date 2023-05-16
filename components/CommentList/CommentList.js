import CommentCard from './CommentCard';
import { commentListStyles } from './CommentListStyles';
import { View } from 'react-native';

const CommentList = ({ comments }) => {
    return (
        <View style={commentListStyles.list}>
            {comments.map((item) =>(
                <CommentCard key={item.id} item={item}/>
            ))}
        </View>
    );
}

export default CommentList;
