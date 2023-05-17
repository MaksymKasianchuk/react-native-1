import React, { useState } from "react";
import PrimaryButton from '../../../components/PrimaryButton';
import ImageBg from '../../../components/ImageBg';
import UserAvetar from "../../../components/UserAvatar";
import { regStyles } from './RegistrationScreenStyles';
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
} from 'react-native';

const initState = {
    login: '',
    mail: '',
    password: '',
};

const RegistrationScreen = ({ navigation }) => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState(initState);
    const { registerUser } = useApp();

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    const submitHandler = () => {
        hideKeyboard();
        const {login, password, mail} = state;
        registerUser(login, password, mail);
        setState(initState);
    }

    return (
        <ImageBg>
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
                            
                                <View style={regStyles.avatarWrap}>
                                    <UserAvetar imageLoaded={false} />
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

                                 <PrimaryButton text="Sign up" handler={submitHandler} />

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
        </ImageBg>
    );
}

export default RegistrationScreen;