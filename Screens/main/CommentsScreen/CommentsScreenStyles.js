import { StyleSheet } from 'react-native';

export const commentsScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        position: 'relative',
    },
    scrollView: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
    },
    imgWrap: {
        maxHeight: 240,
        borderRadius: 8,
        overflow: 'hidden'
    },
    sendForm: {
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    sendField: {
        borderRadius: 100,
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 15,
        fontSize: 16,
        lineHeight: 19,
    },
    sendFormBtn: {
        position: 'absolute',
        top: '50%',
        right: 25,
        width: 44,
        height: 44,
        transform: [{translateY: -13}],
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendFormBtnIcon: {
        color: "#FFFFFF"
    },
});