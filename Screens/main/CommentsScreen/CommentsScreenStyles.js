import { StyleSheet } from 'react-native';

export const commentsScreenStyles = StyleSheet.create({
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
    }
});