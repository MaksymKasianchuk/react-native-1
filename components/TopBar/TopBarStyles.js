import { StyleSheet } from 'react-native';
export const topBarStyles = StyleSheet.create({
    wrap: {
        position: 'relative',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 22,
        color: '#212121'
    },
    logOut: {
        position: 'absolute',
        top: 45,
        right: 20,
    },
    logOutIcon: {
        color: '#BDBDBD',
    }
});