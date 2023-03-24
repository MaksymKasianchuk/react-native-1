import React, { useState, useEffect } from "react";
import { 
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { AppLoading } from "expo";
import * as Font from 'expo-font';

const initState = {
    login: '',
    mail: '',
    password: '',
};

const RegistrationScreen = () => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [state, setState] = useState(initState);

    const submitHandler = () => {
        setIsKeyboardShown(false);
        console.log(state);
        Keyboard.dismiss();
        setState(initState);
    }

    return (
        <View style={styles.formWrap}>
            <View style={styles.form}> 
                <View style={{
                    ...styles.formTop,
                    marginBottom: isKeyboardShown ? 30 : 40,
                }}>
                    <View>
                        {/* <Image source={require('')} /> */}
                    </View>
                
                    <Text style={styles.title}>Registration</Text>
                   
                    <TextInput 
                        onFocus={() => setIsKeyboardShown(true)}
                        onChangeText={(value) => {
                            setState((prevState) => ({ ...prevState, login: value }));
                        }}
                        placeholder='Login'
                        placeholderTextColor='#DDDDDD'
                        value={state.login}
                        style={styles.input}
                    />
                   
                    <TextInput 
                        onFocus={() => setIsKeyboardShown(true)}
                        onChangeText={(value) => {
                            setState((prevState) => ({ ...prevState, mail: value }));
                        }}
                        placeholder='Email'
                        placeholderTextColor='#DDDDDD'
                        value={state.mail}
                        style={styles.input}
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
                        style={styles.input}
                    />
                    
                </View>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.primButton}
                    onPress={submitHandler}
                >
                    <Text style={styles.buttonTxt}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.secButton}
                >
                    <Text>Already have an account? Sign in</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    formWrap: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 60,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    formTop: {

    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 35,
        marginBottom: 15
    },
    input: {
        padding: 15,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        fontSize: 16,
        lineHeight: 19,
        borderRadius: 8,
        marginTop: 15
    },
    primButton: {
        borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FF6C00',
    },
    secButton: {
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
    },
    buttonTxt: {
        color: '#ffffff',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
    },
});