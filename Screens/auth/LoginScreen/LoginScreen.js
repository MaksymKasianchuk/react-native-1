import React, { useState } from "react";
import PrimaryButton from '../../../components/PrimaryButton';
import { logStyles } from './LoginScreenStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useApp } from '../../../hooks/useContext';
import { 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';

const initState = {
    mail: '',
    password: '',
};

const LoginScreen = ({ navigation }) => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState(initState);
    const { loginUser } = useApp();

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    const submitHandler = () => {
        hideKeyboard();
        const {mail, password } = state;
        loginUser(mail, password);
        setState(initState);
    }

    return (
        <ImageBackground 
                style={logStyles.imageBg}
                source={require("../../../assets/photo_bg.png")}
            >
                <TouchableWithoutFeedback onPress={hideKeyboard}>
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{flex: 1}}
                    >
                        <View style={logStyles.formWrap}>
                            <View style={{
                                ...logStyles.form,
                                paddingBottom: isKeyboardShown ? 10 : 60,
                            }}> 
                                
                                <Text style={logStyles.title}>Log in</Text>
                                
                                <TextInput 
                                    onFocus={() => setIsKeyboardShown(true)}
                                    onChangeText={(value) => {
                                        setState((prevState) => ({ ...prevState, mail: value }));
                                    }}
                                    placeholder='Email'
                                    placeholderTextColor='#DDDDDD'
                                    value={state.mail}
                                    style={logStyles.input}
                                />
                                
                                <View style={logStyles.passwordInpWrap}>
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
                                            ...logStyles.input,
                                            ...logStyles.passwordInp
                                        }}
                                    />
                                    <TouchableOpacity 
                                        activeOpacity={0.8}
                                        style={logStyles.showPasswBtn}
                                        onPress={() => setShowPassword((prevState) => !prevState)}
                                    >
                                        <FontAwesomeIcon 
                                            style={logStyles.showPasswBtnSvg} 
                                            icon={ showPassword ? faEyeSlash : faEye } 
                                        />
                                    </TouchableOpacity>
                                </View>

                                <PrimaryButton text="Sign in" handler={submitHandler} />

                                <TouchableOpacity 
                                    activeOpacity={0.8}
                                    style={logStyles.secButton}
                                    onPress={() => navigation.navigate("Registration")}
                                >
                                    <Text>Don't have an account? Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
        </ImageBackground>
    );
}

export default LoginScreen;