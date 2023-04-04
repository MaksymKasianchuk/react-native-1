import React, { useState } from "react";
import { regStyles } from './RegistrationScreenStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';

const initState = {
    login: '',
    mail: '',
    password: '',
};

const RegistrationScreen = ({ navigation }) => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState(initState);

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    const submitHandler = () => {
        hideKeyboard();
        console.log(state);
        setState(initState);
    }

    const userImg = isImgLoaded ? require("../../assets/user.png") : require("../../assets/emptyUser.png");
    return (
        <ImageBackground 
        style={regStyles.imageBg}
        source={require("../../assets/photo_bg.png")}
        >
            <TouchableWithoutFeedback onPress={hideKeyboard}>
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{flex: 1}}
                    >
                        <View style={regStyles.formWrap}>
                            <View style={{
                                ...regStyles.form,
                                paddingBottom: isKeyboardShown ? 10 : 60,
                            }}> 
                            
                                <View style={regStyles.userImgWrap} >
                                    <Image style={regStyles.userImg} source={userImg} />
                                    
                                    <TouchableOpacity 
                                        activeOpacity={0.8}
                                        style={{
                                            ...regStyles.imgSwitch,
                                            borderColor: isImgLoaded ? "#BDBDBD" : "#FF6C00",
                                        }}
                                        onPress={() => setIsImgLoaded((prevState) => !prevState)}
                                    >
                                        <FontAwesomeIcon 
                                            style={{color: isImgLoaded ? "#BDBDBD" : "#FF6C00"}} 
                                            icon={ isImgLoaded ? faXmark : faPlus } 
                                        />
                                    </TouchableOpacity>
                                </View>
                                
                                <Text style={regStyles.title}>Registration</Text>
                                
                                <TextInput 
                                    onFocus={() => setIsKeyboardShown(true)}
                                    onChangeText={(value) => {
                                        setState((prevState) => ({ ...prevState, login: value }));
                                    }}
                                    placeholder='Login'
                                    placeholderTextColor='#DDDDDD'
                                    value={state.login}
                                    style={regStyles.input}
                                />
                                
                                <TextInput 
                                    onFocus={() => setIsKeyboardShown(true)}
                                    onChangeText={(value) => {
                                        setState((prevState) => ({ ...prevState, mail: value }));
                                    }}
                                    placeholder='Email'
                                    placeholderTextColor='#DDDDDD'
                                    value={state.mail}
                                    style={regStyles.input}
                                />
                                
                                <View style={regStyles.passwordInpWrap}>
                                    <TextInput 
                                        onFocus={() => setIsKeyboardShown(true)}
                                        onChangeText={(value) => {
                                            setState((prevState) => ({ ...prevState, password: value }));
                                        }}
                                        placeholder='Password'
                                        placeholderTextColor='#DDDDDD'
                                        value={state.password}
                                        secureTextEntry={!showPassword}
                                        style={{
                                            ...regStyles.input,
                                            ...regStyles.passwordInp
                                        }}
                                    />
                                    <TouchableOpacity 
                                        activeOpacity={0.8}
                                        style={regStyles.showPasswBtn}
                                        onPress={() => setShowPassword((prevState) => !prevState)}
                                    >
                                        <FontAwesomeIcon 
                                            style={regStyles.showPasswBtnSvg} 
                                            icon={ showPassword ? faEyeSlash : faEye } 
                                        />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity 
                                    activeOpacity={0.8}
                                    style={regStyles.primButton}
                                    onPress={submitHandler}
                                >
                                    <Text style={regStyles.buttonTxt}>Sign up</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    activeOpacity={0.8}
                                    style={regStyles.secButton}
                                    onPress={() => navigation.navigate("Login")}
                                >
                                    <Text>Already have an account? Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

export default RegistrationScreen;