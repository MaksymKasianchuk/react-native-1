import { StyleSheet } from 'react-native';

export const profileScreenStyles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        
    },
    contentWrap: {
        flex: 1,
        paddingTop: 200,
    },
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        position: 'relative',
        paddingTop: 70,
        paddingBottom: 30
    },
    avatarWrap: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{translateX: -60}, {translateY: -60}],
    },
    logOut: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    logOutIcon: {
        color: '#BDBDBD',
    },
    name: {
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        paddingHorizontal: 15
    },
    postsList: {
        paddingHorizontal: 15
    },  
});