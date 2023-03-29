import React, { useState, useEffect } from "react";
import { regStyles } from './RegistrationScreenStyles';
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
} from 'react-native';

const initState = {
    login: '',
    mail: '',
    password: '',
};

const RegistrationScreen = () => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
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

    return (
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
                    
                        <View>
                            <Image source={require('../../assets/user.png')} />
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
                        
                        <TextInput 
                            onFocus={() => setIsKeyboardShown(true)}
                            onChangeText={(value) => {
                                setState((prevState) => ({ ...prevState, password: value }));
                            }}
                            placeholder='Password'
                            placeholderTextColor='#DDDDDD'
                            value={state.password}
                            secureTextEntry={true}
                            style={regStyles.input}
                        />

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
                        >
                            <Text>Already have an account? Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default RegistrationScreen;