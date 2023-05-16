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
    userImgWrap: {
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: [{translateX: -60}, {translateY: -50}],
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