import CommentCard from './CommentCard';
import { someComments } from '../../constants/someComments';
import { commentListStyles } from './CommentListStyles';
import { View } from 'react-native';

const CommentList = () => {
    return (
        <View style={commentListStyles.list}>
            {someComments.map((item) =>(
                <CommentCard key={item.id} item={item}/>
            ))}
        </View>
    );
}

export default CommentList;
