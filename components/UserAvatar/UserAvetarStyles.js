import { StyleSheet } from 'react-native';
export const usrAvatarStyles = StyleSheet.create({
    userImgWrap: {
        position: 'relative',
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