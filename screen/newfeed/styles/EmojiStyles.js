import {StyleSheet} from 'react-native'

export const emojiStyles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    emojiIcon_btn_list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    emojiIcon_btn_image: {
        width: 40,
        height: 40,
        margin: 5
    }
});