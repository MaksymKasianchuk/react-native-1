import { StyleSheet } from 'react-native';

export const postListStyles = StyleSheet.create({
    postListWrap: {
       flex: 1,
       paddingTop: 30,
       paddingHorizontal: 15,
       backgroundColor: '#FFFFFF',
    },
    item: {
        marginBottom: 20,
        paddingBottom: 20,
        borderColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 0,
        borderBottomWidth: 1
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 10
    },
    name: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 18,       
        color: '#212121',
    },
    mail: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16,       
        color: '#212121',
        marginTop: 5
    },
    thumb: {
        borderRadius: 8,
        marginBottom: 8
    },
    titleWrap: {
        marginBottom: 8
    },
    title: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 22,       
        color: '#212121',
    },
    metaWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    metaLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaIcon: {
        color: '#BDBDBD',
    },
    metaComments: {
        color: '#BDBDBD',
        paddingRight: 20
    },
    metaLikes: {
        color: '#BDBDBD',
        paddingRight: 20
    },
    metaLocation: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,       
        color: '#212121',
    }

});