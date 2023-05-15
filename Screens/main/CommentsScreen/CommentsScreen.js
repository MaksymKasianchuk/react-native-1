import { useState } from 'react';
import CommentList from '../../../components/CommentList';
import { commentsScreenStyles } from './CommentsScreenStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { 
    View,
    Text,
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
    const [commentText, setCommentText] = useState('');

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
        console.log('CommentsScreen dismiss')
    };

    return (
        <View style={commentsScreenStyles.screen}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={hideKeyboard}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}
                >
                    <View style={{flex: 1}}>

                        <ScrollView style={commentsScreenStyles.scrollView}>
                            <SafeAreaView style={{flex: 1}}> 
                                {/* IMAGE */}
                                <View style={commentsScreenStyles.imgWrap}>
                                    <Image  style={{ width: '100%', height: '100%'}} source={{ uri: route.params.thumbnail }} />
                                </View>

                                {/* Comments List */}
                                <Pressable style={{ flex: 1}}>
                                    <CommentList />
                                </Pressable>

                            </SafeAreaView>
                        </ScrollView>
                                
                        {/* Send comment form */}
                        <View style={{...commentsScreenStyles.sendForm, 
                            paddingBottom: isKeyboardShown ? 100 : 10,
                        }}>
                            <TextInput 
                                onFocus={() => setIsKeyboardShown(true)}
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
                                onPress={() => {}}
                            >
                                <FontAwesomeIcon 
                                    style={commentsScreenStyles.sendFormBtnIcon} 
                                    icon={faArrowUp} 
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default CommentsScreen;