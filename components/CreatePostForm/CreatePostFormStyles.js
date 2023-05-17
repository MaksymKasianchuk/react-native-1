import { StyleSheet } from 'react-native';

export const createPost = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    formFields: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 15, 
        justifyContent: 'space-between'
    },
    formFieldsTop: {
        flex: 1,
    },
    loadImgWrap: {
        position: 'relative',
        minHeight: 240,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderStyle: 'solid',
        overflow: 'hidden',
    },
    loadImage: {
        width: '100%',
        minHeight: 240,
    },
    loadImgSwitch: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -30}, {translateY: -30}],
        backgroundColor: '#ffffff',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadImgSwitchIcon: {
        color: '#BDBDBD',
    },
    loadImgText: {
        marginTop: 15,
        marginBottom: 30,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    input: {
        height: 50,
        paddingVertical: 15,
        borderColor: '#E8E8E8',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        position: 'relative',
    },
    inputWrap: {
        position: 'relative',
    },
    inputIcon: {
        color: '#DDDDDD',
        position: 'absolute', 
        top: '50%',
        left: 0,
        transform: [{translateY: -8}],
    },
    resetBtnWrap: {
        alignItems: 'center',
    },
    resetBtn: {
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: "#F6F6F6",
        paddingVertical: 8,
    },
    resetBtnIcon: {
        color: '#BDBDBD',
    },
});