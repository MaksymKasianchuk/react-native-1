import { useState } from 'react';
import CommentList from '../../../components/CommentList';
import { commentsScreenStyles } from './CommentsScreenStyles';
import { 
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Pressable,
    SafeAreaView,
    Platform,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

const CommentsScreen = ({ route }) => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    return (
        <View style={{flex:1}}>
            <TouchableWithoutFeedback onPress={hideKeyboard}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}
                >
                    <ScrollView style={commentsScreenStyles.scrollView}>
                        <SafeAreaView style={{flex: 1}}> 
                            {/* IMAGE */}
                            <View style={commentsScreenStyles.imgWrap}>
                                <Image  style={{ width: '100%', height: '100%'}} source={{ uri: route.params.thumbnail }} />
                            </View>
                            
                            <Pressable style={{ flex: 1}}>
                                <CommentList />
                            </Pressable>

                        </SafeAreaView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default CommentsScreen;