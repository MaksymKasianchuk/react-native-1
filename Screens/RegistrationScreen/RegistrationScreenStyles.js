import { StyleSheet } from 'react-native';
export const regStyles = StyleSheet.create({
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
});