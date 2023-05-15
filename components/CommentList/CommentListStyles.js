import { StyleSheet } from 'react-native';

export const commentListStyles = StyleSheet.create({
    list: {
        paddingTop: 18,
        paddingBottom: 40,
        flex: 1,
    },
    card: {
        pointerEvent: 'none',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 12,
    },
    cardMy: {
        pointerEvent: 'none',
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
        marginVertical: 12,
    },
    left: {

    },
    right: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        padding: 15,
        marginLeft: 15,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    rightMy: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        padding: 15,
        marginRight: 15,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 100,
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
    },
    meta: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
        textAlign: 'right',
        marginTop: 8,
    },
    metaMy: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
        textAlign: 'left',
        marginTop: 8,
    }
});