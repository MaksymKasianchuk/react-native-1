import { StyleSheet } from 'react-native';
export const regStyles = StyleSheet.create({
    imageBg: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: "cover",
    },
    formWrap: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        backgroundColor: '#FFFFFF',
        paddingTop: 90,
        paddingBottom: 60,
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'relative'
    },
    title: {
        fontFamily: 'Roboto-Bold',
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
    secButton: {
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
    },
    avatarWrap: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{translateX: -45}, {translateY: -60}],
    },
    passwordInpWrap: {
        position: "relative", 
        marginTop: 15,
        marginBottom: 40,
    },
    showPasswBtn: {
        position: 'absolute',
        top: 5,
        right: 0,
        width: 50, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    showPasswBtnSvg: {
        color: '#BDBDBD',
    },
    passwordInp: {
        marginTop: 0,
        paddingRight: 55
    },  
});