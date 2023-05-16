import { useState } from 'react';
import CommentList from '../../../components/CommentList';
import { someComments } from '../../../constants/someComments';
import { commentsScreenStyles } from './CommentsScreenStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
} from 'react-native';

const CommentsScreen = ({ route }) => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [commentText, setCommentText] = useState('');

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    const handleSubmit = () => {
        setCommentText('');
        hideKeyboard();
    }

    return (
        <View style={commentsScreenStyles.screen}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <View style={{flex: 1}} >

                    <ScrollView style={commentsScreenStyles.scrollView}>
                        <SafeAreaView style={{flex: 1}}> 
                            {/* IMAGE */}
                            <View style={commentsScreenStyles.imgWrap}>
                                <Image  style={{ width: '100%', height: '100%'}} source={{ uri: route.params.thumbnail }} />
                            </View>

                            {/* Comments List */}
                            <Pressable style={{ flex: 1}}>
                                <CommentList comments={ someComments }/>
                            </Pressable>

                        </SafeAreaView>
                    </ScrollView>
                            
                    {/* Send comment form */}
                    <View style={{...commentsScreenStyles.sendForm, 
                        paddingBottom: isKeyboardShown ? 40 : 10,
                    }}>
                        <TextInput 
                            onFocus={() => setIsKeyboardShown(true)}
                            onBlur={() => hideKeyboard()}
                            onChangeText={(value) => {
                                setCommentText(value);
                            }}
                            placeholder='Password'
                            placeholderTextColor='#DDDDDD'
                            value={commentText}
                            style={commentsScreenStyles.sendField}
                        />
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={commentsScreenStyles.sendFormBtn}
                            onPress={handleSubmit}
                        >
                            <FontAwesomeIcon 
                                style={commentsScreenStyles.sendFormBtnIcon} 
                                icon={faArrowUp} 
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default CommentsScreen;