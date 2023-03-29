import { StyleSheet } from 'react-native';
export const regStyles = StyleSheet.create({
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
    primButton: {
        borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FF6C00',
        marginTop: 40,
    },
    secButton: {
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
    },
    buttonTxt: {
        fontFamily: 'Roboto-Regular',
        color: '#ffffff',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
    },
    userImgWrap: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{translateX: -45}, {translateY: -60}],
    },
    userImg: {
        width: 120,
        height: 120,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6'
    },
    imgSwitch: {
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        right: 0,
        transform: [{translateX: 12}],
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});