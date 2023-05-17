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
        borderColor: '#eeeeee',
        borderStyle: 'solid',
        borderWidth: 0,
        borderBottomWidth: 1 
    },
    text: {
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 22,
        color: '#212121'
    },
    logOut: {
        position: 'absolute',
        top: 50,
        right: 10,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        transform: [{translateX: 0}, {translateY: -8}],
    },
    logOutIcon: {
        color: '#BDBDBD',
    },
    goBack: {
        position: 'absolute',
        top: 50,
        left: 5,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        transform: [{translateX: 0}, {translateY: -8}],
    },

});