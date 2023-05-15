import { useState } from 'react';
import { createPost } from './CreatePostFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

const initState = {
    name: '',
    location: '',
};

const CreatePostForm = () => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [state, setState] = useState(initState);
    
    const loadImg = isImgLoaded ? { uri: 'https://raw.githubusercontent.com/MaksymKasianchuk/img/main/park.png' } : require("../../assets/emptyBg.png");

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    const checkSubmitDisabled = () => {
        const {name, location} = state;
        if(name && location && isImgLoaded){
            setIsSubmitDisabled(false);
        }
    };

    const submitHandler = () => {
        hideKeyboard();
        const {name, location} = state;
        if(name && location && isImgLoaded){
            setState(initState);
            setIsImgLoaded(false);
            setIsSubmitDisabled(true);
        };
    };

    return (
        <View style={createPost.form}>
            <TouchableWithoutFeedback onPress={hideKeyboard}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}
                >
                    <View style={{
                        ...createPost.formFields,
                        marginTop: isKeyboardShown ? -100 : 0,
                    }}>

                        {/* IMAGE */}
                        <View style={createPost.loadImgWrap} >
                            <Image style={createPost.loadImage} source={loadImg} />
                            
                            <TouchableOpacity 
                                activeOpacity={0.8}
                                style={{
                                    ...createPost.loadImgSwitch,
                                    backgroundColor: isImgLoaded ? 'rgba(255, 255, 255, 0.3)' : '#ffffff',
                                }}
                                onPress={() => {
                                    setIsImgLoaded((prevState) => !prevState)
                                    checkSubmitDisabled();
                                }}
                            >
                                <FontAwesomeIcon 
                                    style={{
                                        color: isImgLoaded ? '#ffffff'  : '#BDBDBD',
                                    }} 
                                    icon={ faCamera } 
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={createPost.loadImgText}>
                            {isImgLoaded ? "Edit photo" : "Load photo"}
                        </Text>

                        {/* POST NAME */}
                        <TextInput 
                            onFocus={() => setIsKeyboardShown(true)}
                            onChangeText={(newName) => {
                                setState((prevState) => ({ ...prevState, name: newName }));
                                checkSubmitDisabled();
                            }}
                            placeholder='The post name'
                            placeholderTextColor='#DDDDDD'
                            value={state.name}
                            style={createPost.input}
                        />

                        {/* POST LOCATION */}
                        <TextInput 
                            onFocus={() => setIsKeyboardShown(true)}
                            onChangeText={(newLocation) => {
                                setState((prevState) => ({ ...prevState, location: newLocation }));
                                checkSubmitDisabled();
                            }}
                            placeholder='The post name'
                            placeholderTextColor='#DDDDDD'
                            value={state.location}
                            style={{
                                ...createPost.input,
                                marginTop: 15,
                            }}
                        />

                        {/* CREATE POST BTN */}
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={isSubmitDisabled ? createPost.primButtonDisabled : createPost.primButton}
                            onPress={isSubmitDisabled ? () => {} : submitHandler}
                        >
                            <Text style={{
                                ...createPost.buttonTxt,
                                color: isSubmitDisabled ? '#BDBDBD' : '#ffffff',
                            }}>Publish</Text>
                        </TouchableOpacity>
                    </View>
                    
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default CreatePostForm;
